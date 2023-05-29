function solution(num_list) {
  let gop = 1;
  for (let i = 0; i < num_list.length; i++) {
    gop *= num_list[i];
  }
  return num_list.reduce((a, b) => a + b) ** 2 > gop ? 1 : 0;
}
