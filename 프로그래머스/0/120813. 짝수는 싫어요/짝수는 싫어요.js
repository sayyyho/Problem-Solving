const solution = n => {
    return new Array(n+1).fill(0).reduce((acc, _, idx) => idx % 2 === 1 ? [...acc, idx] : [...acc], [])
}