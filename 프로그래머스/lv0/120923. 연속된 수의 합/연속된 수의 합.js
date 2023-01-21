function solution(num, total) {
  var answer = [];
  let x = Math.floor(total / num);
  console.log(x);
  for (let i = 0; i < num; i++) {
    if (num % 2 !== 0) {
      answer.push(x - (num - Math.ceil(num/2)) + i);
    } else {
      answer.push(x -((num/2)-1) + i);
    }
  }
  return answer;
}
