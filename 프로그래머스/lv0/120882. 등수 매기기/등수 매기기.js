function solution(score) {
  score.forEach((i) => {
    i[0] = i[0] + i[1];
    i.pop();
  });
  let n = score.flat().length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (score.flat()[j] > score.flat()[i]) {
        answer[i]++;
      }
    }
  }
  return answer;
}
