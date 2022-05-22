class SegmentTreeRMQ {
    constructor() {
        this.st = [];
    }

    minVal(x, y) {
        return x < y ? x : y;
    }

    getMid(s, e) {
        return parseInt(s + (e - s) / 2);
    }

    RMQUtil(ss, se, qs, qe, index) {

        if (qs <= ss && qe >= se) return this.st[index];

        if (se < qs || ss > qe) return 2147483647;

        var mid = this.getMid(ss, se);
        return this.minVal(
            this.RMQUtil(ss, mid, qs, qe, 2 * index + 1),
            this.RMQUtil(mid + 1, se, qs, qe, 2 * index + 2)
        );
    }

    RMQ(n, qs, qe) {
        if (qs < 0 || qe > n - 1 || qs > qe) {
            return -1;
        }

        return this.RMQUtil(0, n - 1, qs, qe, 0);
    }

    constructSTUtil(arr, ss, se, si) {
        if (ss == se) {
            this.st[si] = arr[ss];
            return arr[ss];
        }

        var mid = this.getMid(ss, se);
        this.st[si] = this.minVal(
            this.constructSTUtil(arr, ss, mid, si * 2 + 1),
            this.constructSTUtil(arr, mid + 1, se, si * 2 + 2)
        );
        return this.st[si];
    }

    constructST(arr, n) {

        var x = parseInt(Math.ceil(Math.log(n) / Math.log(2)));

        var max_size = 2 * parseInt(Math.pow(2, x) - 1);
        this.st = new Array(max_size).fill(0);

        this.constructSTUtil(arr, 0, n - 1, 0);
    }
}