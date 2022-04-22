const gcd = (x, y) => {
    if (y == 0)
        return x;
    return gcd(y, x % y);
}

const gcdArray = (arr) => {
    var n = 0;
    for (var i = 0; i < arr.length; i++)
        n = gcd(arr[i], n);
    return n;
}

const lcm = (x, y) => {
    return x * y / gcd(x, y);
}

const lcmArray = (arr) => {
    var n = 1;
    for (var i = 0; i < arr.length; i++)
        n = lcm(arr[i], n);
    return n;
}

console.log(gcdArray([20, 32, 16]))
console.log(lcm(164, 36))
console.log(lcmArray([164, 36, 475]))