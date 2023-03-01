function solution(n) {
    let answer = 0;
    for (let k = 2; k <= n; k++) { // 연속된 자연수의 개수를 2부터 n까지 증가시키면서 탐색
        const x = (n - k * (k-1) / 2) / k; // kx = n - k(k-1)/2 인 정수 x를 찾음
        if (x >= 1 && Number.isInteger(x)) answer++; // x가 1 이상의 정수인 경우, 경우의 수 1 증가
    }
    return answer + 1; // 자기 자신만으로 이루어진 경우의 수 1 추가하여 반환
}
