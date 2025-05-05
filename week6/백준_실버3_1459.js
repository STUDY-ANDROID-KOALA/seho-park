const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const [x, y, w, s] = input[0].split(" ").map(Number);
  let result = 0;

  if (s >= 2 * w) {
    result = (x + y) * w;
  } else if (s >= w) {
    result = Math.min(x, y) * s + Math.abs(x - y) * w;
  } else {
    const maxXY = Math.max(x, y);
    const minXY = Math.min(x, y);
    const diff = maxXY - minXY;

    if (diff % 2 === 0) {
      result = maxXY * s;
    } else {
      result = (maxXY - 1) * s + w;
    }
  }

  console.log(result);
});
