interface IMatches {
    doubleQuote: RegExp,
    escapeCharacter: RegExp,
    newLine: RegExp,
    singleQuote: RegExp,
    tilde: RegExp
}

interface IReplacement {
    doubleQuote: string,
    escapeCharacter: string,
    newLine: string
    singleQuote: string,
    tilde: string
}

export const Match: IMatches = {
    doubleQuote: new RegExp(/"/g),
    escapeCharacter: new RegExp(/\\/g),
    newLine: new RegExp(/$/gm),
    singleQuote: new RegExp(/`/g),
    tilde: new RegExp(/'/g)
}

export const Replacements: IReplacement = {
    doubleQuote: "\\\"",
    escapeCharacter: "\\\\",
    newLine: "\",\n \"",
    // newLine: "\", \n\"",
    singleQuote: "\\\'",
    tilde: "\\\`",
}

