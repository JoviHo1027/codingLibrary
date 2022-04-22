const chunkSubstr = (str, size) => {
    const numChunks = Math.ceil(str.length / size)
    const chunks = new Array(numChunks)

    for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
        chunks[i] = str.substr(o, size)
    }

    return chunks
}

const chunkSubstrFromEnd = (str, size) => {
    const numChunks = Math.ceil(str.length / size)
    const chunks = new Array(numChunks)

    for (let i = numChunks - 1, o = str.length; i >= 0; --i, o -= size) {
        chunks[i] = str.substr(Math.max(o - size, 0), Math.min(size, o))
    }

    return chunks
}