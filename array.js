let getArrMean = (arr) => {
    return (arr.length % 2 == 1) ? Math.floor(arr[arr.length / 2]) : ((arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2)
}

let getArrMeanInArr = (arr) => {
    return (arr.length % 2 == 1) ? [Math.floor(arr[arr.length / 2])] : [(arr[arr.length / 2 - 1], arr[arr.length / 2])]
}

let union = (arr) => {
    let x = [];
    for (let a of arr) {
        x = x.concat(a);
    }
    return x;
}

let unionWithUnique = (arr) => {
    let x = [];
    for (let a of arr) {
        x = x.concat(a);
    }
    return [...new Set(x)];
}

let interset = (arr) => {
    let filteredArray = arr[0];
    for (let a of arr.slice(1)) {
        filteredArray = filteredArray.filter(value => a.includes(value))
    }
    return filteredArray;
}

let arrToObjWithValue = (arr) => {
    let map = {};
    for (let n of arr) {
        if (!(n in map))
            map[n] = 0;
        map[n]++;
    }
    return map;
}

let arrToObj = (arr) => {
    let map = {};
    for (n of arr) {
        map[n] = true;
    }
    return map;
}

let range = (min, max) => {
    var len = max - min + 1;
    var arr = new Array(len);
    for (var i = 0; i < len; i++) {
        arr[i] = min + i;
    }
    return arr;
}

let multipleOccurance = (arr) => {
    return arr.reduce((prev, curr, index) => {
        return ((index + 1) * (arr.length - index)) * curr + prev;
    }, 0)
}

let sameDiff = (arr) => {
    arr = arr.sort((a, b) => a - b);
    if (arr.length < 2)
        return true;
    let diff = arr[1] - arr[0];
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] != diff)
            return false;
    }
    return true;
}

const combinationOfArrays = ([head, ...[headTail, ...tailTail]]) => {
    if (!headTail) return head

    const combined = headTail.reduce((acc, x) => {
        return acc.concat(head.map(h => `${h}${x}`))
    }, [])

    return combinationOfArrays([combined, ...tailTail])
}