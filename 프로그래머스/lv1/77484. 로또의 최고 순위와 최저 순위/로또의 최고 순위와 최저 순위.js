function solution(lottos, win_nums) {
  let min = 0;
  let max = 0;
  for (let i = 0; i < 6; i++) {
    if (lottos.includes(win_nums[i])) {
      min++;
      max++;
    }
  }
  max += lottos.filter((i) => i === 0).length;
  7 - max > 6 ? (max = 6) : (max = 7 - max);
  7 - min > 6 ? (min = 6) : (min = 7 - min);
  return [max, min];
}
