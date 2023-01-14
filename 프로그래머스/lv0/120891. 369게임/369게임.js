function solution(order) {
    var answer = 0;
    String(order).split("").forEach((i)=>{
         if (i !== "0") {
  if(i%3===0){
    answer++
  }
  }
})
    return answer;
}