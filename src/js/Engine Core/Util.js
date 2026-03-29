/**
 * Class representing a collection of utility functions.
 *
 * The reason some of this is vanilla JS and some is JQuery is that I took some code from a personal reference project (vanilla) and then made additions in this project via JQuery.
 */
class Util {
    static #copyier = null;

    static initClickToCopy() {
        if (this.#copyier === null) {
            this.#copyier = new CopyToClipboard();
        }
    }

    static async fetchCSV(url) {
        try {
            const response = await fetch(url);
            return response.text();
        } catch (error) {
            console.error('Error fetching CSV:', error);
        }
    }

    /**
     * Modified version of linked code.
     *
     * I added trimming (since final cells were coming in with newline chars) and very naive handling of escaped cells that assume `"` is used.
     *
     * @see https://web.archive.org/web/20150114053450/http://techslides.com/convert-csv-to-json-in-javascript
     * @param {} csv
     * @returns
     */
    static csvJSON(csv) {
        const lines = csv.split("\n");

        const result = [];

        const headers = lines[0].split(",");
        const prettyHeaders = [];

        headers.forEach((element, index) => {
            prettyHeaders[index] = element.trim(); // Remove any trailing \r
        });

        for (var i = 1; i < lines.length; i++) {
            const obj = {};
            const currentLine = lines[i].split(",");

            // Heading index may differ when line needs escaping
            let headerI = 0;
            // Current in-progress line
            let openLine = null;

            for (var j = 0; j < currentLine.length; j++) {
                let val = currentLine[j];

                if (typeof val === 'string') {
                    val = val.trim(); // Remove any trailing \r

                    // Start Naive Escaping
                    if (val.startsWith('"')) {
                        openLine = val;

                        continue;
                    } else if (openLine !== null) {
                        // End naive escaping
                        if (val.endsWith('"')) {
                            val = openLine + val;
                            openLine = null;
                        } else {
                            // Continue building escaped string
                            openLine += val;

                            continue;
                        }
                    }
                }

                obj[prettyHeaders[headerI]] = val;

                headerI++;
            }

            result.push(obj);

        }

        return result; //JavaScript object
    }

    /**
     * Dev function for producing the content of the SF1/SF2/SF3 data.
     *
     * Requires running a local web server and the relevant files
     */
    static async renderConstructorsFromCsv() {
        const csvs = [
            './csvs/sf1_cipher_codes.csv',
            './csvs/sf2_cipher_codes.csv',
            './csvs/sf3_cipher_codes.csv',
        ];

        for (const csv of csvs) {
            /**
             * @type CsvCipherData[] data
             */
            const data = this.csvJSON(await this.fetchCSV(csv));

            const instances = [];
            let string = '';

            data.forEach(element => {
                if (!element.id) {
                    return;
                }

                const tags = [element.tag];

                if (element.tag !== 'Battle Card' && element.tag.includes('Battle Card')) {
                    tags.push('Battle Card');
                }

                string += `\
new CipherCode(
    '${element.id}',
    '${element.reward}',
    \`${element.code}\`,
    ['${tags}']
),\n`;

                instances.push(
                    new CipherCode(
                        element.id,
                        element.reward,
                        element.code,
                        tags
                    )
                );
            });
        }
    }
}

class CopyToClipboard {
    constructor() {
        this.tooltipTimeout = null;
        this.init();
    }

    init() {
        document.addEventListener("click", (e) => {
            if (
                e.target.matches("[data-copy-text]") ||
                e.target.closest("[data-copy-text]")
            ) {
                const element = e.target.matches("[data-copy-text]")
                    ? e.target
                    : e.target.closest("[data-copy-text]");
                this.copyText(element);
            }
        });
    }

    async copyText(element) {
        const textToCopy = element.getAttribute("data-copy-text");

        if (!textToCopy) {
            console.warn("No text to copy found");
            return;
        }

        // Deprecated execCommand() must be used
        // for this to function in a local context
        var tempInput = document.createElement("input");
        tempInput.style = "position: absolute; left: -1000px; top: -1000px";
        tempInput.value = textToCopy;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        $(element).trigger('text-copied');

        // ? This is the modern API when the content is hosted
        // try {
        //     await navigator.clipboard.writeText(textToCopy);
        //     this.showTooltip(button);
        // } catch (err) {
        //     console.error("Failed to copy text:", err);
        // }

        this.showTooltip(element);
    }

    showTooltip(element) {
        // Remove any existing tooltip
        this.removeTooltip();

        const successMessage = "Copied!";

        const tooltip = document.createElement("div");
        tooltip.textContent = successMessage;
        tooltip.className = "copy-tooltip";

        // Position tooltip above the button
        const rect = element.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 8}px`;
        // tooltip.style.transform = "translateX(-50%) translateY(-100%)";

        document.body.appendChild(tooltip);

        // Show tooltip
        requestAnimationFrame(() => {
            tooltip.classList.add("active");
        });

        // Auto-hide tooltip
        this.tooltipTimeout = setTimeout(() => {
            this.removeTooltip();
        }, 500);
    }

    removeTooltip() {
        const existingTooltip = document.querySelector(".copy-tooltip");

        if (existingTooltip) {
            existingTooltip.classList.remove("opacity-100");
            existingTooltip.classList.add("opacity-0");

            setTimeout(() => {
                if (existingTooltip.parentNode) {
                    existingTooltip.parentNode.removeChild(existingTooltip);
                }
            }, 150);
        }

        if (this.tooltipTimeout) {
            clearTimeout(this.tooltipTimeout);
            this.tooltipTimeout = null;
        }
    }
}

window.Util = Util;