const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(line.trim());
}).on("close", () => {
  const sensorNumber = +input[0];
  const communicationCenterNumber = +input[1];
  const sensorLocation = input[2]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (communicationCenterNumber >= sensorNumber) {
    console.log(0);
    return;
  }

  const sensorDistance = sensorLocation
    .slice(1)
    .map((value, index) => value - sensorLocation[index])
    .sort((a, b) => b - a);

  console.log(
    sensorDistance
      .slice(communicationCenterNumber - 1)
      .reduce((prev, curr) => prev + curr)
  );
});
