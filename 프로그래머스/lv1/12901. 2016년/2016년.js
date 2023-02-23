function solution(a, b) {
  const daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  let totalDays = 0;
  for (let i = 0; i < a - 1; i++) {
    totalDays += daysOfMonth[i];
  }
  totalDays += b - 1;

  return daysOfWeek[(totalDays + 5) % 7];
}