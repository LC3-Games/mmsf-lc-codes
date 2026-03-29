class SaveHandler {
    static KEY = 'mmfsf.json';

    /**
     * @returns {SaveData|null}
     */
    static loadSavedState() {
        try {
            const parsed = this.loadFromLocal()

            return parsed;
        } catch (e) {
            console.warn('Failed to load save, resetting', e)

            try {
                removeLocal()
            } catch {
                // ignore
            }

            return null;
        }
    }

    /**
     * @param {SaveData} data
     */
    static saveToLocal(data) {
        try {
            localStorage.setItem(SaveHandler.KEY, JSON.stringify(data));
        } catch (e) {
            console.warn("Failed to save to localStorage", e);
        }
    }

    /**
     * @returns {SaveData|null}
     */
    static loadFromLocal() {
        const raw = localStorage.getItem(SaveHandler.KEY);

        if (!raw) {
            return null;
        }

        try {
            /**
             * @type {SaveData}
             */
            const parsed = JSON.parse(raw);

            return parsed;
        } catch (e) {
            console.warn("Failed to parse save from localStorage", e);

            return null;
        }
    }

    static removeLocal() {
        localStorage.removeItem(SaveHandler.KEY);
    }

    /**
     * @param {SaveData} data
     */
    static exportSave(data) {
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: "application/json" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;
        a.download = "mmsf-ciphers.json";

        document.body.appendChild(a);

        a.click();
        a.remove();

        URL.revokeObjectURL(url);
    }

    static async importSaveFile(file) {
        return file.text().then((text) => {
            const parsed = JSON.parse(text);

            return parsed;
        });
    }

    static scheduleSave(delay = null) {
        const ms = typeof delay === 'number' ? delay : (this.autosaveSeconds * 1000)

        if (saveTimer) {
            return;
        }

        saveTimer = setTimeout(() => {
            this.save()
            saveTimer = null
        }, ms)
    }
}

window.SaveHandler = SaveHandler;