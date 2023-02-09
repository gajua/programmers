function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n) {
  let arr = [];
  if (isPrime(n)) return [n];
  for (let i = 2; i < n; i++) {
    if (n % i === 0 && isPrime(i)) {
      arr.push(i);
    }
  }
  return arr;
}
