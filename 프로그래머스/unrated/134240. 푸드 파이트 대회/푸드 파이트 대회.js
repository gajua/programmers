function solution(food) {
  var answer = [];
  var b = [];
  for (let i = 1; i < food.length; i++) {
    a = ~~(food[i] / 2);
    for (let s = 0; s < a; s++) {
      b.push(i);
    }
  }
  answer = [...b, 0, ...b.reverse()];
  return answer.join("");
}
