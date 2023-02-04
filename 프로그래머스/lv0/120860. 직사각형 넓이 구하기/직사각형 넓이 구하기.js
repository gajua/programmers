function solution(dots) {
  let x = [];
  let y = [];
  dots.filter((i) => x.push(i[0]));
  dots.filter((i) => y.push(i[1]));
  return (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y));
}
