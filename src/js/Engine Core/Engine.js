/**
 * Class representing a collection of utility functions.
 */
class Engine {
    static #instance = null;

    currentDatasetId;
    editedDatasets;

    isEditMode = false;
    static toggleAllSelected = false;

    // ? Not planned for initial release since probably too impactful
    // ? A "compact" mode toggle would probably be better
    enabledColumns = {
        // Can't disable column
        // code: true,
        item: true,
        tags: true,
        id: true
    }

    load() {
        const save = SaveHandler.loadSavedState();

        this.#loadState(save);
    }

    initEvents() {
        this.#initRowToggles();
        this.#listenForCopy();

        this.#initImportExport();

        Util.initClickToCopy();
    }

    #loadState(save) {
        this.currentDatasetId = save?.currentDatasetId ?? 'sf1';
        this.isEditMode = save?.isEditMode ?? false;

        this.editedDatasets = {};

        for (const key in window.cipherCodes) {
            const dataset = window.cipherCodes[key];

            if (!save || typeof save.selectedCiphers[dataset.id] === 'undefined') {
                this.editedDatasets[dataset.id] = dataset.clone();
            } else {
                this.editedDatasets[dataset.id] = dataset.only(
                    ...save.selectedCiphers[dataset.id]
                );
            }
        }
    }

    #initRowToggles() {
        $(document).on('click', 'table.editable tr', function (e) {
            const $el = $(e.target).closest('tr');

            const datasetId = $el
                .closest('table')
                .data('dataset-id');
            const cipherId = $el
                .data('cipher-id');

            if (!datasetId) {
                return;
            }

            const updated = Engine.toggleCipherSelect(cipherId, datasetId);

            if (updated) {
                $el.toggleClass('selected', Engine.cipherIsSelected(cipherId, datasetId));
            }
        })
    }

    #initImportExport() {
        $('#export').on('click', () => SaveHandler.exportSave(this.getSaveData()));

        $('#import').on('click', async () => {
            const file = $('#import-file');

            if (file.length && file[0].files) {
                const data = await SaveHandler.importSaveFile(file[0].files[0]);

                this.#loadState(data);

                this.save();

                // Update page
                $.wiki('<<redo>>');

                alert('Loaded Save!');
            } else {
                alert('No file');
            }
        });
    }

    #listenForCopy() {
        $(document).on('text-copied', (e) => {
            // Nothing stateful, just indicator to user
            // if they have clicked the row or not
            $(e.target)
                .closest('tr')
                .toggleClass('copied');
        })
    }

    exportSave() {
        try {
            const data = this.getSaveData()
            SaveHandler.exportSaveFile(data)
        } catch (e) {
            console.warn('Failed to export save', e)
        }
    };

    save() {
        try {
            SaveHandler.saveToLocal(this.getSaveData())
        } catch (e) {
            console.warn('Failed to save', e)
        }
    }

    /**
     * @returns {SaveData}
     */
    getSaveData() {
        const selected = {};

        for (const key in this.editedDatasets) {
            if (!Object.hasOwn(this.editedDatasets, key)) continue;

            const dataset = this.editedDatasets[key];

            selected[dataset.id] = dataset.pluck('id');
        }

        return {
            enabledColumns: this.enabledColumns,
            selectedCiphers: selected,
            currentDatasetId: this.currentDatasetId,
            isEditMode: this.isEditMode,
        }
    }

    static getRowClass(cipherId) {
        let classes = '';

        if (this.IsEditMode) {
            classes += this.cipherIsSelected(cipherId) ? 'selected' : '';
        } else {
            classes += 'copyable-row';
        }

        return classes;
    }

    static toggleAll() {
        if (!this.Instance.isEditMode) {
            return;
        }

        const dataset = this.CurrentDataset;
        const editedDataset = this.EditedDatasets[this.CurrentDatasetId];

        for (const key in dataset.codes) {
            if (this.toggleAllSelected) {
                editedDataset.add(dataset.codes[key]);
            } else {
                editedDataset.remove(dataset.codes[key]);
            }
        }

        this.Instance.save();

        this.toggleAllSelected = !this.toggleAllSelected;

        $.wiki('<<redo>>');
    }

    /**
     * @param {number} cipherId
     * @param {string} datasetId
     * @returns {boolean}
     */
    static toggleCipherSelect(cipherId, datasetId = null) {
        datasetId ??= this.CurrentDatasetId;
        const cipher = this.getCipher(cipherId, datasetId);

        if (cipher === null) {
            console.log('Cipher does not exist for ID ' + cipherId + ' in dataset ' + datasetId);

            return false;
        }

        if (this.EditedDatasets[datasetId].has(cipher.id)) {
            this.EditedDatasets[datasetId].remove(cipher);
        } else {
            this.EditedDatasets[datasetId].add(cipher);
        }

        this.Instance.save();

        return true;
    }

    /**
     * @param {number} cipherId
     * @param {string} datasetId
     * @returns {CipherCode|null}
     */
    static getCipher(cipherId, datasetId = null) {
        datasetId ??= this.CurrentDatasetId;

        return this.CompleteDatasets[datasetId]?.get(cipherId) ?? null;
    }

    static cipherIsSelected(cipherId, datasetId = null) {
        datasetId ??= this.CurrentDatasetId;

        return this.EditedDatasets[datasetId].has(cipherId);
    }

    static columnIsDisabled(columnId) {
        return this.Instance.enabledColumns[columnId] ?? false;
    }

    static set CurrentDatasetId(id) {
        this.Instance.currentDatasetId = id;

        this.Instance.save();
    }

    static get CurrentDatasetId() {
        return this.Instance.currentDatasetId;
    }

    static set IsEditMode(state) {
        this.Instance.isEditMode = state;

        this.Instance.save();
    }

    static get IsEditMode() {
        return this.Instance.isEditMode;
    }

    /**
     * @returns {CipherCodeCollection}
     */
    static get CurrentDataset() {
        if (this.IsEditMode) {
            return this.CompleteDatasets[this.CurrentDatasetId];
        }

        return this.EditedDatasets[this.CurrentDatasetId];
    }

    static get Instance() {
        if (this.#instance === null) {
            this.#instance = new Engine();
        }

        return this.#instance;
    }

    static get CompleteDatasets() {
        return window.cipherCodes;
    }

    static get EditedDatasets() {
        return this.Instance.editedDatasets;
    }
}
window.Engine = Engine;