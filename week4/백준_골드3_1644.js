const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let target;

rl.on("line", (line) => {
  target = Number(line.trim());
}).on("close", () => {
  function getPrimes(limit) {
    const isPrime = new Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= limit; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= limit; j += i) {
          isPrime[j] = false;
        }
      }
    }
    return isPrime.map((v, i) => (v ? i : null)).filter((v) => v !== null);
  }

  const primes = getPrimes(target);

  let st = 0;
  let ed = 0;
  let s = primes[0];
  let res = 0;

  while (ed < primes.length) {
    if (s < target) {
      ed++;
      if (ed === primes.length) break;
      s += primes[ed];
    } else {
      if (s === target) res++;
      s -= primes[st++];
    }
  }

  console.log(res);
});
