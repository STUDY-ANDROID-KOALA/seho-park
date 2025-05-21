const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const [len, days] = input[0].split(" ").map(Number);
  const data = input[1].split(" ").map(Number);
  const prefixSum = [0];

  for (let i = 1; i <= len; i++) {
    prefixSum[i] = prefixSum[i - 1] + data[i - 1];
  }

  let max = Number.MIN_SAFE_INTEGER;
  for (let i = days; i <= len; i++) {
    max = Math.max(max, prefixSum[i] - prefixSum[i - days]);
  }
  console.log(max);
});
