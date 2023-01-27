function solution(x) {
  let n = (x + '')
    .split('')
    .map((i) => Number(i))
    .reduce((a, c) => a + c);
  return x % n === 0 ? true : false;
}
