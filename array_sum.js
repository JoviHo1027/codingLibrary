let sumArray = (arr) => {
    return arr.reduce((prev, curr) => prev + curr, 0)
}

let avgArray = (arr) => {
    return (arr.reduce((prev, curr) => prev + curr, 0) / arr.length)
}