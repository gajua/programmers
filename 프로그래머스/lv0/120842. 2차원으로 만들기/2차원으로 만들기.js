function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i <= num_list.length + 5; i++) {
    if (num_list.length !== 0) {
      answer.push(num_list.splice(0, n));
    }
  }
  return answer;
}
