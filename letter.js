let isLetter = (str) => {
    let n = str.charCodeAt(0);
    return (n >= 65 && n < 91) || (n >= 97 && n < 123);
}