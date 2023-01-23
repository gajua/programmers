function solution(numbers, k) {
  let x = []
  for (let i = 0; i < k; i++) {
   x.push(...numbers);
  }
  return x[(k - 1) * 2];
}