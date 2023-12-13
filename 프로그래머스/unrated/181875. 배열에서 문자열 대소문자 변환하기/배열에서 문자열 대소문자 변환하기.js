function solution(strArr) {
  strArr.forEach((a, i) => {
    strArr[i] = i % 2 === 0 ? a.toLowerCase() : a.toUpperCase();
  });
  return strArr;
}
