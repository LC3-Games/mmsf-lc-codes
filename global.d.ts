declare const cipherCodes: Object<string, CipherCodeCollection>

type CsvCipherData = {
    id: number,
    tag: string,
    code: string,
    item: string,
    /**
     * Not implemented.
     */
    img: ?string
}

interface SaveData {
    enabledColumns: Object<string, boolean>
    selectedCiphers: Object<string, number[]>
    currentDatasetId: string
    isEditMode: boolean
}
