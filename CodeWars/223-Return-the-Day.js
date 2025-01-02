function whatday(num) {
  let weekdays = {
    1: 'Sunday',
    2: 'Monday',
    3: 'Tuesday',
    4: 'Wednesday',
    5: 'Thursday',
    6: 'Friday',
    7: 'Saturday',
  };

  return weekdays[num]
    ? weekdays[num]
    : 'Wrong, please enter a number between 1 and 7';
}
