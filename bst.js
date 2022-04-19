class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        var newNode = new TreeNode(val);

        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }


    insertNode(node, newNode) {
        if (newNode.val < node.val) {
            if (node.left === null)
                node.left = newNode;
            else

                this.insertNode(node.left, newNode);
        } else {
            if (node.right === null)
                node.right = newNode;
            else

                this.insertNode(node.right, newNode);
        }
    }

    remove(val) {
        this.root = this.removeNode(this.root, val);
    }

    removeNode(node, key) {
        if (node === null)
            return null;

        else if (key < node.val) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.val) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = this.findMinNode(node.right);
            node.val = aux.val;

            node.right = this.removeNode(node.right, aux.val);
            return node;
        }

    }


    findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
    getRootNode() {
        return this.root;
    }
    inorder(node) {
        if (node == null)
            return [];
        return [...inOrder(node.left), node.val, ...inOrder(node.right)];
    }
    preorder(node) {
        if (node == null)
            return [];
        return [node.val, ...inOrder(node.left), ...inOrder(node.right)];
    }
    postorder(node) {
        if (node == null)
            return [];
        return [...inOrder(node.left), ...inOrder(node.right), node.val];
    }
    search(node, val) {
        if (node === null)
            return null;

        else if (val < node.val)
            return this.search(node.left, val);

        else if (val > node.val)
            return this.search(node.right, val);

        else
            return node;
    }
}