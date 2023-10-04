function generateHashtag(str) {
  str = str.split(' ');
  str = str.filter((element) => element !== '');

  if (str.length === 0) return false;

  str = str.map((element) => element[0].toUpperCase() + element.slice(1));

  str = '#' + str.join('');
  if (str.length > 140) {
    return false;
  } else {
    return str;
  }
}
