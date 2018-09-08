'use strict';
const singleComment = 1;
const multiComment = 2;
const stripWithoutWhitespace = () => '';
const stripWithWhitespace = (str, start?, end?) => str.slice(start, end).replace(/\S/g, ' ');

export const commentStrip = (str, opts?) => {
    opts = opts || {};

    const strip = opts.whitespace === false ? stripWithoutWhitespace : stripWithWhitespace;

    let insideString = 0;
    let insideComment = 0;
    let offset = 0;
    let ret = '';

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        const nextChar = str[i + 1];

        if (!insideComment && currentChar === '"') {
            const escaped = str[i - 1] === '\\' && str[i - 2] !== '\\';
            if (!escaped) {
                (insideString as any) = !insideString;
            }
        }

        if (insideString) {
            continue;
        }

        if (!insideComment && currentChar + nextChar === '//') {
            ret += str.slice(offset, i);
            offset = i;
            insideComment = singleComment;
            i++;
        } else if (insideComment === singleComment && currentChar + nextChar === '\r\n') {
            i++;
            (insideComment as any) = false;
            ret += strip(str, offset, i);
            offset = i;
            continue;
        } else if (insideComment === singleComment && currentChar === '\n') {
            (insideComment as any) = false;
            ret += strip(str, offset, i);
            offset = i;
        } else if (!insideComment && currentChar + nextChar === '/*') {
            ret += str.slice(offset, i);
            offset = i;
            insideComment = multiComment;
            i++;
            continue;
        } else if (insideComment === multiComment && currentChar + nextChar === '*/') {
            i++;
            (insideComment as any) = false;
            ret += strip(str, offset, i + 1);
            offset = i + 1;
            continue;
        }
    }

    return ret + (insideComment ? strip(str.substr(offset)) : str.substr(offset));
};
