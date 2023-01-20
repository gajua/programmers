const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));
function solution(a, b) {
    return Math.round(팩토리얼(a)/(팩토리얼(a-b) * 팩토리얼(b)))
}