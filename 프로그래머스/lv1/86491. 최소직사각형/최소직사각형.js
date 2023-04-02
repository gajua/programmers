function solution(sizes) {
  let x = Math.max(...sizes.flat());
  let y = [];
  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
    y.push(sizes[i][0]);
  }
  return x * Math.max(...y);
}
