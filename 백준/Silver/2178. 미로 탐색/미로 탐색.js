const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const directions = [
  [-1, 0], 
  [1, 0], 
  [0, -1],
  [0, 1], 
];
let board = [];
let N = 0;
let M = 0;

const bfs = () => {
  const queue = [[0, 0]]; 
  const distances = Array.from(Array(N), () => Array(M).fill(0)); 
  distances[0][0] = 1; // 시작점 거리 초기화

  while (queue.length > 0) {
    const [nodeRow, nodeCol] = queue.shift();

    for (const [dr, dc] of directions) {
      const newRow = nodeRow + dr;
      const newCol = nodeCol + dc;

      if (
        newRow >= 0 &&
        newCol >= 0 &&
        newRow < N &&
        newCol < M &&
        board[newRow][newCol] === 1 &&
        distances[newRow][newCol] === 0
      ) {
        distances[newRow][newCol] = distances[nodeRow][nodeCol] + 1;
        queue.push([newRow, newCol]);
      }
    }
  }

  return distances[N - 1][M - 1];
};

rl.on("line", (line) => {
  if (!N) {
    [N, M] = line.trim().split(" ").map(Number);
  } else {
    board.push(line.trim().split("").map(Number));
    if (board.length === N) {
      rl.close();
    }
  }
}).on("close", () => {
  const result = bfs();
  console.log(result);
});
