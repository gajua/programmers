function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let arr = [];
    for (let s = 1; s <= i; s++) {
      if(i % s ===0){
        arr.push(i)
      }
    }
    if (arr.length > 2) {
      answer++;
    }
  }
  return answer;
}
