function solution(s) {
  let regex = /[^0-9]/g;
  if (s.length === 4 || s.length === 6) {
    if (!regex.test(s)) {
      return true;
    } else {
      return false;
    }
  }else{
      return false
  }
}
