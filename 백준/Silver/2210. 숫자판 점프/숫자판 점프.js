const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const board = input.map((line) => line.split(" "));

const uniqueNumbers = new Set();

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function dfs(x, y, currentNumber) {
  if (currentNumber.length === 6) {
    uniqueNumbers.add(currentNumber);
    return;
  }

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
      dfs(nx, ny, currentNumber + board[nx][ny]);
    }
  }
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(i, j, board[i][j]);
  }
}

console.log(uniqueNumbers.size);
