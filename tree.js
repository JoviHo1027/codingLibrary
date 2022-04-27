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

let compareSubTree = (root1, root2) => {
    if (root1 == null && root2 == null)
        return true;

    if (root1 == null || root2 == null)
        return false;

    return (root1.data == root2.data &&
        compareSubTree(root1.left, root2.left) &&
        compareSubTree(root1.right, root2.right));
}