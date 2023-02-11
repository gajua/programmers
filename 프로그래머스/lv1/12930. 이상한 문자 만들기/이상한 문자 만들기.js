function solution(s) {
  let arr = s.toUpperCase().split(' ');
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    for (let s = 0; s < arr[i].length; s++) {
      if (s % 2 === 1) {
        answer.push(arr[i][s].toLowerCase());
      } else {
        answer.push(arr[i][s]);
      }
    }
    answer.push(' ');
  }
  answer.pop();
  return answer.join('');
}
