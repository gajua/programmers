function solution(absolutes, signs) {
  let s = [];
  signs.filter((i) => (i ? s.push(1) : s.push(-1)));
  let arr = [];
  for (let i = 0; i < absolutes.length; i++) {
    arr.push(absolutes[i] * s[i]);
  }
  return arr.reduce((a, c) => a + c);
}
