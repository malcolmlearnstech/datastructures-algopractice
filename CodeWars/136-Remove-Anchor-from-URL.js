function removeUrlAnchor(url) {
  let begin = 0;
  let end = url.indexOf('#');

  return end > 0 ? url.slice(begin, end) : url;
}

/*
REFACTORED SOLUTION -

We can use the method of .split() and place a string of the pound 
sign as the parameter to notate where we want to break up the 
string. As the string method will return an array, and we want to 
pull everything before the pound sign, we choose the array reference 
of zero ("0") which will be the first array element before the pound.
*/
