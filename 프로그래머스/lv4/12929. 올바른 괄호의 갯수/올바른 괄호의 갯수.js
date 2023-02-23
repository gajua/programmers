function solution(n) {
  let answer = 0;
  const stack = [];
  
  function dfs(open, close) {
    if (open === n && close === n) { // 괄호 쌍이 n개일 때
      answer++;
      return;
    }
    
    if (open < n) { // 여는 괄호 추가
      stack.push("(");
      dfs(open+1, close);
      stack.pop();
    }
    
    if (close < open) { // 닫는 괄호 추가
      stack.push(")");
      dfs(open, close+1);
      stack.pop();
    }
  }
  
  dfs(0, 0);
  return answer;
}
