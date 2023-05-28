function toWeirdCase(string) {
  string = string.toLowerCase().split(' ');

  for (let i = 0; i < string.length; i++) {
    string[i] = string[i].split('');

    string[i] = string[i]
      .map((element, index) => {
        if (index % 2 === 0) {
          return element.toUpperCase();
        } else {
          return element;
        }
      })
      .join('');
  }

  return string.join(' ');
}
