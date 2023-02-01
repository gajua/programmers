function solution(operations) {
  let arr = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i][0] === 'I') {
      arr.push(Number(operations[i].slice(1)));
    } else {
      if (operations[i].slice(1) == -1) {
        arr.shift();
      } else {
        arr.pop();
      }
    }
    arr.sort((a, b) => a - b);
  }
  return arr.length === 0 ? [0, 0] : [Math.max(...arr), Math.min(...arr)];
}
