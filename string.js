let isPrefix = (word, prefix) => {
    for (let i = 0; i < prefix.length; i++) {
        if (word[i] != prefix[i]) {
            return false;
        }
    }
    return true;
}

let splitContinuous = (str) => {
    let arr = [];
    let start = 0;
    for (let i = 1; i < str.length; i++) {
        if (str[i] != str[i - 1]) {
            arr.push(str.substring(start, i - start))
            start = i;
        }
    }
    if (start < str.length - 1) {
        arr.push(str.substring(start, str.length))
    }
    return arr;
}

let getAllSubstrings = (str) => {
    var i, j, result = [];

    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
}