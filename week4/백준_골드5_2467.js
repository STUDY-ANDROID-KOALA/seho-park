const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const len = Number(input[0]);
  const datas = input[1].split(" ").map(Number);

  let st = 0;
  let ed = len - 1;
  let s = 0;
  let res = Number.MAX_SAFE_INTEGER;
  let l, r;

  while (st < ed) {
    s = datas[st] + datas[ed];
    if (Math.abs(s) <= Math.abs(res)) {
      l = st;
      r = ed;
      res = s;
      if (s === 0) break;
    }
    if (s > 0) ed--;
    else st++;
  }
  console.log(datas[l], datas[r]);
});
