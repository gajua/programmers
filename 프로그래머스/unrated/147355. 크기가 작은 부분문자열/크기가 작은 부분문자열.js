function solution(t, p) {
  let answer = 0;
  const l = p.length;
  const arr = t.split("");
  let arr2 = [];
  for (let i = 0; i < t.length - p.length + 1; i++) {
    arr2.push(arr.slice(i, i + l).join(""));
  }
  for (let s = 0; s < arr2.length; s++) {
    if (Number(arr2[s]) <= Number(p)) {
      answer++;
    }
  }
  return answer;
}
