function solution(n) {
    return Number((n+"").split("").sort((a,c) => c-a).join(""))
}