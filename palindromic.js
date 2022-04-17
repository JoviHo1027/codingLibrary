let isPalindromic = (str) => {
    for (var i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindromic('ada'))
console.log(isPalindromic('adda'))
console.log(isPalindromic('xda'))