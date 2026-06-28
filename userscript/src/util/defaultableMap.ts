
export class DefaultableMap<K, V> extends Map<K, V> {
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
