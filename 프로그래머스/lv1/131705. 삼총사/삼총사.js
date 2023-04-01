function solution(number) {
  const n = number.length;
  let answer = 0;

  // 세 수를 선택하는 모든 경우를 탐색
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        // 합이 0인 경우 카운트
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }

  return answer;
}
