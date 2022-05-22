var MAX = 500;
var lookup = Array.from(Array(MAX), () => Array(MAX));
const buildSparseTable = (arr, n) => {
    for (var i = 0; i < n; i++) {
        lookup[i] = []
        lookup[i][0] = arr[i];
    }

    for (var j = 1;
        (1 << j) <= n; j++) {

        for (var i = 0;
            (i + (1 << j) - 1) < n; i++) {

            if (lookup[i][j - 1] <
                lookup[i + (1 << (j - 1))][j - 1])
                lookup[i][j] = lookup[i][j - 1];
            else
                lookup[i][j] =
                lookup[i + (1 << (j - 1))][j - 1];
        }
    }
}

const query = (L, R) => {

    var j = parseInt(Math.log2(R - L + 1));

    if (lookup[L][j] <= lookup[R - (1 << j) + 1][j])
        return lookup[L][j];

    else
        return lookup[R - (1 << j) + 1][j];
}