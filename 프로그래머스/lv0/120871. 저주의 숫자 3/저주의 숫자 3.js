function solution(n) {
  var answer = 0;
  for (let i = 0; i < n; i++) {
    ++answer;
    if (answer % 3 === 0) {
      ++answer;
    }
    while (String(answer).split("").includes("3")) {
      ++answer;
    }
    if (answer % 3 === 0) {
      ++answer;
    }
  }
  return answer;
}
