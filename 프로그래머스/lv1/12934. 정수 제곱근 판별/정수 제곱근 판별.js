function solution(n) {
  let s = n ** 0.5;
  if (s % 1 === 0) {
    return (s + 1) ** 2;
  } else {
    return -1;
  }
}
