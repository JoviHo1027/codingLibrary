let getArrMean = (arr) => {
    return (arr.length % 2 == 1) ? Math.floor(arr[arr.length / 2]) : ((arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2)
}

let getArrMeanInArr = (arr) => {
    return (arr.length % 2 == 1) ? [Math.floor(arr[arr.length / 2])] : [(arr[arr.length / 2 - 1], arr[arr.length / 2])]
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