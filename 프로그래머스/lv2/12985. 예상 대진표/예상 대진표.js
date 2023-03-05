function solution(n, a, b) {
  let round = 0;
  
  while (a !== b) {
    round++;
    
    if (Math.abs(a - b) === 1 && Math.min(a, b) % 2 === 1) {
      return round;
    }
    
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }
  
  return round;
}
