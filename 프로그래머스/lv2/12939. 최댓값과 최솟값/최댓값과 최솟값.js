function solution(s) {
  let a = '';
  let arr = s.split(' ').map((i) => parseInt(i));
  a += Math.min(...arr) + ' ' + Math.max(...arr);
  return a;
}
