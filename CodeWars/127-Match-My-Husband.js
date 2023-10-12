function match(usefullness, months) {
  let usefulTotal = 0;
  let needs = 100;

  for (const element of usefulness) {
    usefulTotal += element;
  }

  while (months > 0) {
    needs = needs - needs * 0.15;
    months--;
  }
  return usefulTotal > needs ? 'Match!' : 'No match!';
}
