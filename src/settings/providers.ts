import {getValue, setValue, StorageKey} from "./storage";
import {Theme} from "../dataTypes";

export enum OptionKey {
    showCheckMark = "showCheckMark",
    showCrossMark = "showCrossMark",
    showTags = "showTags",
    showFiles = "showFiles",
    checkMark = "checkMark",
    crossMark = "crossMark",
    warningMark = "warningMark",
    theme = "theme",
}

const defaultBooleanOptions = new Map([
    [OptionKey.showCheckMark, true],
    [OptionKey.showCrossMark, true],
    [OptionKey.showTags, true],
    [OptionKey.showFiles, true],
]);

const defaultStringOptions = new Map([
    [OptionKey.checkMark, "✓"],
    [OptionKey.crossMark, "✗"],
    [OptionKey.warningMark, "!"],
    [OptionKey.theme, Theme.Device],
]);

class DefaultableMap<K, V> extends Map<K, V> {
    defaults: Map<K, V>;

    constructor(map: Map<K, V>, defaults: Map<K, V>, onChange: (this: DefaultableMap<K, V>) => void) {
        super(map.entries());
        this.defaults = defaults
        this.onChange = onChange
    }

    onChange(): void {}

    clear(): void {
        super.clear()
        this.onChange()
    }

    delete(key: K): boolean {
        let result = super.delete(key)
        this.onChange()
        return result
    }

    get(key: K): V | undefined {
        return super.get(key) ?? this.defaults.get(key)
    }

    set(key: K, value: V): this {
        super.set(key, value)
        this.onChange()
        return this
    }
}

export const booleanOptions: Map<OptionKey, boolean> = await optionProvider(StorageKey.BooleanOptions, defaultBooleanOptions)
export const stringOptions: Map<OptionKey, string> = await optionProvider(StorageKey.StringOptions, defaultStringOptions)

async function optionProvider<V>(storageKey: StorageKey, defaultOptions: Map<OptionKey, V>): Promise<Map<OptionKey, V>> {
    let map: Map<OptionKey, V> = await getValue(storageKey, new Map<OptionKey, V>)
    return new DefaultableMap<OptionKey, V>(map, defaultOptions, function() {setValue(storageKey, this)})
}
