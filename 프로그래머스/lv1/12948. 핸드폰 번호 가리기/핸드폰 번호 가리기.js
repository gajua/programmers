function solution(phone_number) {
  let a = '';
  for (let i = 0; i < phone_number.length - 4; i++) {
    a += '*';
  }
  return a+phone_number.slice(-4)
}
