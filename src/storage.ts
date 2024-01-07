
/**
 * Get value of type T from storage. Deletes stored key-value pair, if it fails to parse the value.
 *
 * Implementation of storage differs between userscript and browser extension.
 *
 * @param key key used to store value
 * @param defaultValue optional default value
 */
export async function getValue<T>(key: string, defaultValue?: T): Promise<T> {
    const text = await GM.getValue<string>(key, undefined);
    try {
        return text === undefined ? Promise.resolve(defaultValue) : JSON.parse(text) as T;
    } catch (e: any) {
        console.warn("Failed to parse stored value. Delete stored key-value pair.")
        await deleteValue(key);
        return defaultValue;
    }
}

/**
 * Write value of type T to storage.
 *
 * Implementation of storage differs between userscript and browser extension.
 *
 * @param key key used to store value
 * @param value value to be stored
 */
export async function setValue<T>(key: string, value: T): Promise<void> {
    return GM.setValue(key, JSON.stringify(value));
}

/**
 * Delete key-value pair from storage.
 *
 * Implementation of storage differs between userscript and browser extension.
 *
 * @param key key used to store value
 */
export async function deleteValue(key: string): Promise<void> {
    return GM.deleteValue(key);
}
