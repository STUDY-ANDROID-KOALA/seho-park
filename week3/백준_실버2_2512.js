const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const inputArray = [];

rl.on("line", (line) => {
  inputArray.push(line.trim());
}).on("close", () => {
  const n = Number(inputArray[0]);
  const datas = inputArray[1].split(" ").map(Number);
  const budget = Number(inputArray[2]);

  let start = 0;
  let end = Math.max(...datas);
  let ans = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let currSum = datas.reduce((sum, req) => sum + Math.min(req, mid), 0);

    if (currSum > budget) {
      end = mid - 1;
    } else {
      ans = mid;
      start = mid + 1;
    }
  }

  console.log(ans);
});
