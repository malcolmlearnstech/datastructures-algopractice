function countConsonants(str) {
  let cons = {};
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[bcdfghjklmnpqrstvwxyz]/g) && !cons[str[i]]) {
      cons[str[i]] = 1;
    }
  }
  return Object.keys(cons).length;
}
