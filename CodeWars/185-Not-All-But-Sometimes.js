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

/*
REFACTORED SOLUTION -

Alternative to the for-loop iterating, we can still redefine the "str" 
input as an array then map. Within mapping, we can just check truthiness 
of the the character in the object, naturally checking that the values 
are still above 0; only adding letters that exist as keys in the "what" 
object when object lookup using that letters equals "0". All other 
letters that are not keys in the "what" object still get added. These 
letters are all added to a result variable that is intialized as an 
empty string.
*/
