function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map((i) => (i === '' ? i : i[0].toUpperCase() + i.slice(1)))
    .join(' ');
}
