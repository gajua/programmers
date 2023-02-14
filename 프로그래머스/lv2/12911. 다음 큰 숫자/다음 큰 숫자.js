function solution(n) {
  let a = n.toString(2).match(/1/g).length;
  b = n + 1;
  while (!(b.toString(2).match(/1/g).length === a)) {
    b++;
  }
  return b;
}
