
/**
 * In contrast to '!', this only evaluates booleans
 */
Boolean.prototype.not = function (this: boolean): boolean {
    return !this
}
