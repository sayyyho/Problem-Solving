const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let size = null;
let data = [];

rl.on("line", (line) => {
  if (size === null) {
    size = parseInt(line.trim(), 10);
  } else {
    data = line.trim().split(" ").map(Number);
    rl.close();
  }
}).on("close", () => {
  const result = bfs();
  console.log(result);
  process.exit(0);
});

const bfs = () => {
  const dp = Array(size).fill(size + 1);
  const queue = [0];
  dp[0] = 0;

  while (queue.length > 0) {
    const now = queue.shift();

    for (let i = 1; i <= data[now]; i++) {
      const next = now + i;
      if (next >= size) continue;

      if (dp[next] > dp[now] + 1) {
        dp[next] = dp[now] + 1;
        queue.push(next);
      }
    }
  }

  return dp[size - 1] === size + 1 ? -1 : dp[size - 1];
};
