function solution(price, money, count) {
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(i);
  }
  let a = price * arr.reduce((a, b) => a + b) - money;
  return a > 0 ? a : 0;
}
