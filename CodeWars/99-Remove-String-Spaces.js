function noSpace(x) {
  x = x.split('');
  x = x.filter((element) => element !== ' ');
  return x.join('');
}
