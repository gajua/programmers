function solution(common) {
  let a = common[1] - common[0];
  let b = common[2] - common[1];
  if (a === b) {
    return common[common.length - 1] + a;
  }
  let c = common[1] / common[0];
  return common[common.length - 1] * c;
}
