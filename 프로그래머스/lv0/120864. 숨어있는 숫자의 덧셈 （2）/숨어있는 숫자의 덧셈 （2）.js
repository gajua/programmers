function solution(my_string) {
  let reg = /[A-Za-z]/;
  let arr = my_string.split(reg).map((i) => Number(i));
  return arr.length === 0 ? 0 : arr.reduce((a, b) => a + b);
}
