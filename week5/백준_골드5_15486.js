const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const day = Number(input[0]);
  const table = new Array(day + 1).fill(0);

  for (let i = 1; i <= day; i++) {
    table[i] = Math.max(table[i], table[i - 1]);

    const [t, p] = input[i].split(" ").map(Number);
    if (i + t <= day + 1) {
      table[i + t - 1] = Math.max(table[i + t - 1], table[i - 1] + p);
    }
  }
  console.log(table[day]);
});
