function timeCorrect(timestring) {
  if (timestring === null) {
    return null;
  } else if (timestring === '') {
    return '';
  } else if (timestring.match(/[^0-9:]/g) || !timestring.match(/[:]/g)) {
    return null;
  }

  timestring = timestring.split(':').map((element) => Number(element));

  if (timestring[2] > 59) {
    timestring[1] = timestring[1] + Math.floor(timestring[2] / 60);
    timestring[2] = timestring[2] - 60;
  }

  if (timestring[1] > 59) {
    timestring[0] = timestring[0] + Math.floor(timestring[1] / 60);
    timestring[1] = timestring[1] - 60;
  }

  if (timestring[0] >= 24) {
    while (timestring[0] >= 24) {
      timestring[0] -= 24;
    }
  }

  return timestring
    .map((element) => String(element).padStart(2, '0'))
    .join(':');
}
