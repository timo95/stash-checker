
export enum StorageKey {
    BooleanOptions = "booleanOptions",
    CustomDisplayRules = "customDisplayRules",
    StashEndpoints = "stashEndpoints",
    StringOptions = "stringOptions",
    NumberOptions = "numberOptions",
}

/**
 * Get value of type T from storage. Deletes stored key-value pair, if it fails to parse the value.
 *
 * Implementation of storage differs between userscript and browser extension.
 */
export async function getValue<T>(key: string, defaultValue: T): Promise<T> {
    const text = await GM.getValue<string | undefined>(key, undefined);
    try {
        if (text === undefined) {
            console.info(`No stored value for '${key}'. Using default value.`)
            return Promise.resolve(defaultValue);
        } else {
            console.info(`Found stored value for '${key}'.`)
            return Promise.resolve(JSON.parse(text, reviver));
        }
    } catch (e: any) {
        console.warn("Failed to parse stored value for '${key}'. Deleting stored key-value pair.")
        await deleteValue(key);
        return Promise.resolve(defaultValue);
    }
}

/**
 * Write value of type T to storage.
 *
 * Implementation of storage differs between userscript and browser extension.
 */
export async function setValue<T>(key: string, value: T): Promise<void> {
    return GM.setValue(key, JSON.stringify(value, replacer));
}

/**
 * Delete key-value pair from storage.
 *
 * Implementation of storage differs between userscript and browser extension.
 */
export async function deleteValue(key: string): Promise<void> {
    return GM.deleteValue(key);
}

function replacer(key: string, value: any) {
    if (value instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(value.entries()), // or with spread: value: [...value]
        };
    } else {
        return value;
    }
}

function reviver(key: string, value: any) {
    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}
