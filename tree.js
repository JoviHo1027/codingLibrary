let inOrder = (root) => {
    if (root == null)
        return [];
    return [...inOrder(root.left), root.val, ...inOrder(root.right)];
}

let preOrder = (root) => {
    if (root == null)
        return [];
    return [root.val, ...inOrder(root.left), ...inOrder(root.right)];
}

let postOrder = (root) => {
    if (root == null)
        return [];
    return [...inOrder(root.left), ...inOrder(root.right), root.val];
}