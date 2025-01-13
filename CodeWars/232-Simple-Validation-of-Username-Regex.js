function validateUsr(username) {
  let outliers = /[^a-z0-9_]/g;

  return username.length > 16
    ? false
    : username.length < 4
    ? false
    : username.match(outliers)
    ? false
    : true;
}
