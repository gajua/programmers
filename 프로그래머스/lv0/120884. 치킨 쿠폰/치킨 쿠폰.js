function solution(chicken) {
  var answer = 0;
  while (chicken >= 10) {
    answer += chicken / 10;
    chicken = chicken / 10;
  }
  return Math.round(answer);
}
