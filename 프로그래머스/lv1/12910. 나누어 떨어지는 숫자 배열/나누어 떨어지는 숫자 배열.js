function solution(arr, divisor) {
  var answer = [];
  arr.forEach((i) => {
    if (i % divisor === 0) {
      answer.push(i);
    }
  });
  return answer.length > 0 ? answer.sort((a, c) => a - c) : [-1];
}
