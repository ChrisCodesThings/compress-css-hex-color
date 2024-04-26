// @ts-check

/**
 * Determine if a CSS hex colour code can be compressed
 * @param {string} col CSS hex colour code
 * @returns {boolean}
 */
function canBeCompressed(col) {
    return (
        (col.length == 7 || col.length == 9)
        && col[1] + col[3] + col[5] + col[7] === col[2] + col[4] + col[6] + col[8]
    );
}

/**
 * Removes unnecessary alpha F's from a CSS hex colour string
 * @param {string} col CSS hex colour string
 * @returns {string}
 */
function removeAlphaFF(col) {
    if (col.length == 9 && col.match(/ff$/i)) {
        return col.slice(0, -2);
    }

    if (col.length == 5 && col.match(/f$/i)) {
        return col.slice(0, -1);
    }

    return col;
}

/**
 * Compresses a CSS hex colour code to short form, if possible
 * @param {string} col CSS hex colour code
 * @returns {string}
 */
export default function compressCSSHexColor(col) {
    col = removeAlphaFF(col);

    if (!canBeCompressed(col) || col.length <= 5) {
        return col;
    }

    return (
        "#"
        + col[1] + col[3] + col[5]
        + (col.length == 9 ? col[7] : "")
    );
}
