function solution(A, B) {
  var answer = 0;
  A.sort((a, c) => a - c);
  B.sort((a, c) => c - a);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[i];
  }
  return answer;
}
