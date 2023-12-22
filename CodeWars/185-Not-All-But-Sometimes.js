function remove(str, what) {
  str = str.split('');

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (what[char] && what[char] > 0) {
      str[i] = 0;
      what[char]--;
    }
  }

  str = str.filter((element) => element !== 0).join('');

  return str.length > 0 ? str : '';
}
