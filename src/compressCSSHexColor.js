import isCSSHexColor from '@chriscodesthings/is-css-hex-color';

function canBeCompressed(col) {
    if ((col.length == 7 || col.length == 9)
        && col[1] + col[3] + col[5] + col[7] === col[2] + col[4] + col[6] + col[8]) {
        return true;
    }

    if (col.length == 5 && col.match(/f$/i)) {
        return true;
    }

    return false;
}

function removeAlphaFF(col) {
    if (col.length == 9 && col.match(/ff$/i)) {
        return col.slice(0, -2);
    }

    if (col.length == 5 && col.match(/f$/i)) {
        return col.slice(0, -1);
    }

    return col;
}

export default function (col) {
    if (!isCSSHexColor(col)) {
        return;
    }

    if (!canBeCompressed(col)) {
        return col;
    }

    col = removeAlphaFF(col);

    if (col.length == 4) {
        return col;
    }

    return (
        "#"
        + col[1] + col[3] + col[5]
        + (col.length == 9 ? col[7] : "")
    );
}
