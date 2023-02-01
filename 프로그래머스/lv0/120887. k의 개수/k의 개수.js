function solution(i, j, k) {
  let answer = 0;
  for (let s = i; s <= j; s++) {
    String(s)
      .split('')
      .filter((a) => {
        if (a == k) {
          answer++;
        }
      });
  }
  return answer;
}
