function solution(arr1, arr2) {
  let arr = [];
  for (let s = 0; s < arr1.length; s++) {
    let arr3 = [];
    for (let i = 0; i < arr1[0].length; i++) {
      arr3.push(arr1[s][i] + arr2[s][i]);
    }
    arr.push(arr3);
  }
  return arr;
}
