function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 1) {
    if (flower2 % 2 === 0) {
      return true;
    }
    return false;
  } else {
    if (flower2 % 2 === 1) {
      return true;
    }
    return false;
  }
}

/* 
REFACTOR SOLUTION - 

Using the logic from our initial solution, we know that we are 
simply looking for any instances in which the flowers do not 
match. Going by this we can use a ternary to simply ask if the 
flowers are unequal, returning "true" and for any instances 
where they are not, return false.

*/
