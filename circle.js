let latticePoints = (x, y, r) => {
    let arr = [];
    for (let dx = -r; dx <= r + 1; dx++) {
        for (let dy = -r; dy <= r + 1; dy++) {
            if (Math.pow(dx, 2) + Math.pow(dy, 2) <= Math.pow(r, 2))
                arr.push(`${x+dx},${y+dy}`)
        }
    }
}