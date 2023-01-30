function solution(arr) {
  return arr.length > 1 ? arr.filter((i) => i !== Math.min(...arr)) : [-1];
}
