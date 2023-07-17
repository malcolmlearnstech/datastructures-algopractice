function addLength(str) {
  let result = [];
  str = str.split(' ');

  for (let i = 0; i < str.length; i++) {
    result.push(`${str[i]} ${str[i].length}`);
  }

  return result;
}
