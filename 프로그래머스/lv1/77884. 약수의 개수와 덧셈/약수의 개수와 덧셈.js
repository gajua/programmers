function solution(left, right) {
  let a = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(i ** 0.5)) {
      a -= i;
    } else {
      a += i;
    }
  }
  return a;
}
