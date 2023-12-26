function timeConvert(num) {
  if (num <= 0) {
    return '00:00';
  }

  let hours = String(Math.floor(num / 60));
  let mins = String(num % 60);

  hours = hours.length > 1 ? hours : '0' + hours;
  mins = mins.length > 1 ? mins : '0' + mins;

  return `${hours}:${mins}`;
}
