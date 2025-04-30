const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const testCase = +input[0];

  for (let t = 0; t < testCase; t++) {
    const fileCount = Number(input[t * 2 + 1]);
    const fileSizes = input[t * 2 + 2].split(" ").map(Number);
    const prefixSum = Array(fileCount + 1).fill(0);
    for (let i = 1; i <= fileCount; i++) {
      prefixSum[i] = prefixSum[i - 1] + fileSizes[i - 1];
    }

    const dp = Array.from({ length: fileCount + 1 }, () =>
      Array(fileCount + 1).fill(0)
    );

    for (let length = 2; length <= fileCount; length++) {
      for (let start = 1; start <= fileCount - length + 1; start++) {
        const end = start + length - 1;
        dp[start][end] = Number.MAX_SAFE_INTEGER;

        for (let divider = start; divider < end; divider++) {
          const cost =
            dp[start][divider] +
            dp[divider + 1][end] +
            prefixSum[end] -
            prefixSum[start - 1];
          dp[start][end] = Math.min(dp[start][end], cost);
        }
      }
    }

    console.log(dp[1][fileCount]);
  }
});
