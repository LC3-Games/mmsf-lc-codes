
window.cipherCodes ??= {};

/**
 * My use of clone() is overzealous, since other than the collection itself, I'm planning for all these things to be readonly.
 */
class CipherCode {
    /**
     * @type string
     */
    id;
    /**
     * @type string
     */
    item;
    /**
     * @type string
     */
    code;
    /**
     * @type string[]
     */
    tags;
    /**
     * @type ?string
     */
    img;
    /**
     * @param {string} id
     * @param {string} item
     * @param {string} code
     * @param {string[]} tags
     * @param {?string} img
     */
    constructor(
        id,
        item,
        code,
        tags = [],
        img = null
    ) {
        this.id = parseInt(id);
        this.item = item;
        this.code = code;
        this.tags = tags;
        this.img = img;
    }

    clone() {
        return new CipherCode(this.id, this.item, this.code, this.tags, this.img);
    }
}

class CipherCodeCollection {
    /**
     * @type Object<int,CipherCode>
     */
    codes = {};

    settings;

    /**
     *
     * @param {{number,CipherCode}} cipherCodes
     * @param {CipherCollectionConfig} config
     */
    constructor(cipherCodes = {}, config) {
        for (const key in cipherCodes) {
            const element = cipherCodes[key];

            this.codes[element.id] = element.clone();
        }

        this.config = config;
    }

    /**
     * @param {string} property
     * @returns {any[]}
     */
    pluck(property) {
        const res = [];

        for (const key in this.codes) {
            const code = this.codes[key];

            if (typeof code[property] !== 'undefined') {
                res.push(code[property]);
            }
        }

        return res;
    }

    add(cipher) {
        if (cipher instanceof CipherCode) {
            this.codes[cipher.id] = cipher;
        }
    }

    remove(cipher) {
        if (cipher instanceof CipherCode) {
            delete this.codes[cipher.id];
        } else if (!Number.isNaN(cipher)) {
            delete this.codes[cipher];
        }
    }

    /**
     *
     * @param  {...number} ids
     * @returns {CipherCodeCollection} Brand new collection
     */
    only(...ids) {
        const codes = this.get(...ids);

        return new CipherCodeCollection(
            codes,
            this.config
        );
    }

    /**
     *
     * @param  {...number} ids
     * @returns CipherCode[]|CipherCode
     */
    get(...ids) {
        const res = {};

        if (ids.length === 1) {
            return this.codes[ids[0]]?.clone() ?? null;
        }

        ids.forEach(id => {
            const code = this.codes[id] ?? null;

            if (code) {
                res[code.id] = code.clone();
            }
        });

        return res;
    }

    has(id) {
        return typeof this.codes[id] !== 'undefined';
    }

    clone() {
        return new CipherCodeCollection(this.codes, this.config);
    }

    get label() {
        return this.config.label;
    }

    get id() {
        return this.config.id;
    }
}

class CipherCollectionConfig {
    constructor(
        id,
        label
    ) {
        this.id = id;
        this.label = label;
    }
}

window.CipherCode = CipherCode;
window.CipherCodeCollection = CipherCodeCollection;
window.CipherCodeCollection = CipherCollectionConfig;