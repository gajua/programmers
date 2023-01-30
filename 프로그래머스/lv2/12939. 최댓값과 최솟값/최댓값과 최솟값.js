function solution(s) {
  let a = '';
  let arr = s.split(' ')
  a += Math.min(...arr) + ' ' + Math.max(...arr);
  return a;
}
