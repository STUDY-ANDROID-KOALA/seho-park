const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const [size, ...rest] = input;
  const [row, col] = size.split(" ").map(Number);
  const graph = rest.map((line) => line.split(" ").map(Number));
  const dp = Array.from({ length: row }, () => Array(col).fill(-1));
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  const dfs = (r, c) => {
    if (r === row - 1 && c === col - 1) return 1;
    if (dp[r][c] !== -1) return dp[r][c];

    dp[r][c] = 0;
    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;
      if (
        nr >= 0 &&
        nr < row &&
        nc >= 0 &&
        nc < col &&
        graph[nr][nc] < graph[r][c]
      ) {
        dp[r][c] += dfs(nr, nc);
      }
    }
    return dp[r][c];
  };

  console.log(dfs(0, 0));
});
