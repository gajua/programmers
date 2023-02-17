function solution(numbers) {
  var answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let s = 0; s < numbers.length; s++) {
      if (i !== s) answer.push(numbers[i] + numbers[s]);
    }
  }
  let set = new Set(answer);
  return [...set].sort((a, b) => a - b);
}
