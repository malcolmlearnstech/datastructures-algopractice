function findScreenHeight(width, ratio) {
  let string = '';

  ratio = ratio.split(':');

  string += width + 'x' + (width * Number(ratio[1])) / Number(ratio[0]);

  return string;
}
