const lcm = (num1, num2) => {
  return (num1 * num2) / gcd(num1, num2);
};
const gcd = (num1, num2) => {
  let r = num1 % num2;
  return num2 === 0 ? num1 : gcd(num2, r);
};
function solution(numer1, denom1, numer2, denom2) {
  let 분모 = lcm(denom1, denom2);
  let 분자 = numer1 * (분모 / denom1) + numer2 * (분모 / denom2);
  let a = gcd(분자, 분모);
  return [분자 / a, 분모 / a];
}
