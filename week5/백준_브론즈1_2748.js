const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = +line.trim();
}).on("close", () => {
  const dp = new Array(input + 1).fill(BigInt(0));
  dp[1] = BigInt(1);
  for (let i = 2; i <= input; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }
  console.log(dp[input].toString());
});
