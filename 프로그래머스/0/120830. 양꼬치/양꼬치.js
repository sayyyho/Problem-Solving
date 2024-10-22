const solution = (n, k) => n < 10 ? n * 12000 + k * 2000 : n * 12000 + (k - Math.trunc(n / 10)) * 2000
