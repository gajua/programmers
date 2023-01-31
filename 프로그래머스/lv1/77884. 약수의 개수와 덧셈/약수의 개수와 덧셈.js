function solution(left, right) {
  let arr = [];
  let arr2 = [];
  for (let i = left; i <= right; i++) {
    arr.push(i);
  }
  arr.filter((i) => {
    if (Number.isInteger(i ** 0.5)) {
      arr2.push(i);
    }
  });
  return arr.reduce((a, b) => a + b) - 2 * arr2.reduce((a, b) => a + b);
}
