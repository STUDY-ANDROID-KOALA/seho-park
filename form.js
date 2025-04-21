// 여러 줄 입력 Form

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lineSeparatedInput = [];

rl.on("line", (line) => {
  lineSeparatedInput.push(line.trim());
}).on("close", () => {
  console.log(lineSeparatedInput);
  process.exit(0);
});
