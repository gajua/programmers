function solution(d, budget) {
  d.sort((a, b) => a - b);
  let cnt = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i] <= budget) {
      cnt++;
      budget = budget - d[i];
    }
    if (budget <= 0) {
      break;
    }
  }
  return cnt;
}
