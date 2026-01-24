
export function bytesToReadable(bytes: number): string {
    const labels = ["KB", "MB", "GB", "TB", "PB"]
    let label
    for (label of labels) {
        bytes /= 1000
        if (bytes < 1000) {
            break;
        }
    }
    return bytes.toFixed(2) + label;
}

export function hasKanji(text: string): boolean {
    return /[\u4e00-\u9faf\u3400-\u4dbf]/.test(text);
}

export function hasKana(text: string): boolean {
    return /[\u3041-\u3096\u30a0-\u30ff\uff5f-\uff9f]/.test(text);
}

export function capitalized(word: string): string {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function titleCase(text: string): string {
    return text.split(" ").map(n => capitalized(n)).join(" ");
}

export function nakedDomain(url: string): string {
    const regex = /^(https?:\/\/)?(www\.)?/i;
    return url.replace(regex, '');
}

String.prototype.substringAfter = function (this: string, separator: string): string {
    const index = this.indexOf(separator);
    if (index === -1) {
        return this
    } else {
        return this.substring(index + separator.length);
    }
}

String.prototype.substringBefore = function (this: string, separator: string): string {
    const index = this.indexOf(separator);
    if (index === -1) {
        return this
    } else {
        return this.substring(0, index);
    }
}
