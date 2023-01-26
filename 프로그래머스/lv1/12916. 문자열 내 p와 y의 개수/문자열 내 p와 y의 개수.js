function solution(s) {
  let cnt = 0;
  s.toUpperCase()
    .split('')
    .filter((i) => {
      if (i === 'P') {
        cnt++;
      } else if (i === 'Y') {
        cnt--;
      }
    });
  if (cnt === 0) {
    return true;
  } else {
    return false;
  }
}
