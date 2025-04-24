const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const [n, s] = input[0].split(" ").map(Number);
  const datas = input[1].split(" ").map(Number);

  let start = 0;
  let end = 0;
  let prefixSum = datas[0];
  let result = Number.MAX_SAFE_INTEGER;

  while (end < n) {
    if (prefixSum >= s) {
      result = Math.min(result, end - start + 1);
      prefixSum -= datas[start++];
    } else {
      prefixSum += datas[++end];
    }
  }

  console.log(result === Number.MAX_SAFE_INTEGER ? 0 : result);
});
