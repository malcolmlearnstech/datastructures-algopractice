function readOut(acrostic) {
  let abbrev = '';

  acrostic.map((element) => (abbrev += element[0]));

  return abbrev;
}
