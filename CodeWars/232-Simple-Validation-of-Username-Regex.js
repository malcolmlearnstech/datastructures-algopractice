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

/*
REFACTORED SOLUTION -

To keep the ternary operation condition from being so long, and 
decreasing the ease of readability, we can check for the length 
of the username as its own separate if conditional. THEN we run 
the ternary operator looking for outlier characters.
*/
