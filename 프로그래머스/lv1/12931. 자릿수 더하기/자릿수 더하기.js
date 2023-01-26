function solution(n)
{
    return String(n).split("").map((i)=>Number(i)).reduce((a,c)=>a+c);
}