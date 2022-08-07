class SegmentTree {
    // l: update range start e.g: 0
    // r: update range end e.g: this.tree.sz
    // v: 1
    constructor(nums) {
        let size = 1;
        while (size < nums.length) { size <<= 1; }

        this.size = size;
        this.tree = Array(size << 1);
        this.nums = nums;
        this.build(1, 0, this.size);
    }

    build(v, l, r) {
        if (l === r - 1) { this.tree[v] = this.nums[l]; return; }

        let m = (l + r) >> 1;

        this.build(2 * v, l, m);
        this.build(2 * v + 1, m, r);

        this.tree[v] = this.tree[2 * v] + this.tree[2 * v + 1];
    }

    update(v, l, r, idx, val) {
        if (idx < l || idx >= r) { return; }
        if (l == r - 1) { this.tree[v] = val; return; }

        let m = (l + r) >> 1;

        this.update(2 * v, l, m, idx, val);
        this.update(2 * v + 1, m, r, idx, val);

        this.tree[v] = this.tree[2 * v] + this.tree[2 * v + 1];
    }

    sumRange(v, l, r, bg, en) {
        if (r <= bg || l >= en) { return 0; }
        if (l >= bg && r <= en) { return this.tree[v]; }

        let m = (l + r) >> 1;
        return this.sumRange(2 * v, l, m, bg, en) + this.sumRange(2 * v + 1, m, r, bg, en);
    }
}