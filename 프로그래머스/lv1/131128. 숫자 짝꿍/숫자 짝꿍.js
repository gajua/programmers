function solution(X, Y) {
  var xLength = X.length;
  var yLength = Y.length;
  var yMap = {};
  var a = [];

  for (let i = 0; i < yLength; i++) {
    if (yMap[Y[i]]) {
      yMap[Y[i]]++;
    } else {
      yMap[Y[i]] = 1;
    }
  }

  for (let i = 0; i < xLength; i++) {
    if (yMap[X[i]]) {
      a.push(X[i]);
      yMap[X[i]]--;
      if (yMap[X[i]] === 0) {
        delete yMap[X[i]];
      }
    }
  }

  if (a.length === 0) {
    return '-1';
  } else if (a.join('') == 0) {
    return '0';
  } else {
    return a.sort().reverse().join('');
  }
}
