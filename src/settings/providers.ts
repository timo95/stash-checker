import {getValue, setValue, StorageKey} from "./storage";
import {Theme} from "../dataTypes";
import {DefaultableMap} from "../util/defaultableMap";

export enum OptionKey {
    batchSize = "batchSize",
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

const defaultNumberOptions = new Map([
    [OptionKey.batchSize, 50],
]);

export const booleanOptions: Map<OptionKey, boolean> = await optionProvider(StorageKey.BooleanOptions, defaultBooleanOptions)
export const stringOptions: Map<OptionKey, string> = await optionProvider(StorageKey.StringOptions, defaultStringOptions)
export const numberOptions: Map<OptionKey, number> = await optionProvider(StorageKey.NumberOptions, defaultNumberOptions)

async function optionProvider<V>(storageKey: StorageKey, defaultOptions: Map<OptionKey, V>): Promise<Map<OptionKey, V>> {
    let map: Map<OptionKey, V> = await getValue(storageKey, new Map<OptionKey, V>)
    return new DefaultableMap<OptionKey, V>(map, defaultOptions, function() {setValue(storageKey, this)})
}
