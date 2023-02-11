function solution(n, m) {
  function gcd(a, b) {
    const remainder = a % b;
    if (remainder === 0) return b;
    return gcd(b, remainder);
  }
  let getLCM = (num1, num2) => {
    let lcm = 1;

    while (true) {
      if (lcm % num1 == 0 && lcm % num2 == 0) {
        break;
      }
      lcm++;
    }
    return lcm;
  };
  let answer = [0, 0];
  answer[0] = gcd(Math.max(n, m), Math.min(n, m));
  answer[1] = getLCM(Math.max(n, m), Math.min(n, m));
  return answer;
}
