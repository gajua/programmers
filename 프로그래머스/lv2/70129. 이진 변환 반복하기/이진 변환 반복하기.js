function solution(s) {
  var answer = [0, 0];
  while (s !== "1") {
    answer[1] += s.split("").filter((i) => i === "0").length;
    s = s
      .split("")
      .filter((i) => i === "1")
      .length.toString(2);
    answer[0]++;
  }
  return answer;
}
