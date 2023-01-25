function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  keyinput.map((i) => {
    if (i === "left") {
      x -= 1;
    } else if (i === "right") {
      x += 1;
    } else if (i === "up") {
      y += 1;
    } else if (i === "down") {
      y -= 1;
    }
    if (Math.abs(x) > board[0] / 2) {
      if (x < 0) {
        x = -Math.floor(board[0] / 2);
      } else {
        x = Math.floor(board[0] / 2);
      }
    }
    if (Math.abs(y) > board[1] / 2) {
      if (y < 0) {
        y = -Math.floor(board[1] / 2);
      } else {
        y = Math.floor(board[1] / 2);
      }
    }
  });
  return [x, y];
}

