const solution = (n) => {
    let res = 0;
    if (n > 1) {
        for (let i = 2; i <= n; i += 2) {
                res += i
        }
    }
    return res;
}