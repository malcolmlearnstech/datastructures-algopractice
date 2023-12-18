function rankings(arr) {
  let ranked = [...arr].sort((a, b) => b - a);

  return arr.map((element) => ranked.indexOf(element) + 1);
}
