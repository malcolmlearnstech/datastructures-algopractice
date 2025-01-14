function correct(string) {
  string = string.split('');
  let correct = '';

  string.map((element) => {
    correct +=
      element === '5'
        ? 'S'
        : element === '0'
        ? 'O'
        : element === '1'
        ? 'I'
        : element;
  });
  return correct;
}
