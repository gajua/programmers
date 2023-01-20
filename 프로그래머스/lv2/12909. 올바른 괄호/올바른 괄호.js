function solution(s) {
  let count = 0;
  let answer =""
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? count++ : count--;
    if(count < 0){
      return false
    }
  }
count===0 ? answer = true : answer = false
  return answer
}
