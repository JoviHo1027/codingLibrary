let linkedListToArr = (root) => {
    let arr = [];
    while (root != null) {
        arr.push(root.val);
        root = root.next;
    }
    return arr;
}