function solution(s, n) {
  let arr = s.split('');
  let answer = '';
  for (let i = 0; i < arr.length; i++) {
    let code = arr[i].charCodeAt();
    if (code === 32) {
      answer += ' ';
    } else if (code >= 97) {
      if (code + n > 122) {
        answer += String.fromCharCode(code + n - 26);
      } else {
        answer += String.fromCharCode(code + n);
      }
    } else {
      if (code + n > 90) {
        answer += String.fromCharCode(code + n - 26);
      } else {
        answer += String.fromCharCode(code + n);
      }
    }
  }
  return answer;
}
