function solution(s) {
  var answer = [];
  let a = [];
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (a.includes(arr[i])) {
      answer.push(a.reverse().indexOf(arr[i]) + 1);
      a.reverse();
      a.push(arr[i]);
    } else {
      answer.push(-1);
      a.push(arr[i]);
    }
  }
  return answer;
}
