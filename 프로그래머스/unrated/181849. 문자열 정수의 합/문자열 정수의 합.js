function solution(num_str) {
  return num_str
    .split('')
    .map((i) => Number(i))
    .reduce((a, b) => a + b);
}
