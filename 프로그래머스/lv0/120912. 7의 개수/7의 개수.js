function solution(array) {
    var answer = array.join('').split('').filter((e)=> e==="7").length
    return answer;
}