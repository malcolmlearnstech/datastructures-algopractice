function capitalsFirst(str) {
  let string = [];
  let alphabet = /[a-zA-z]/g;
  str = str.split(' ');

  str.map((element) => {
    if (element[0].match(alphabet) && element[0] === element[0].toUpperCase()) {
      string.push(element);
    }
  });

  str.map((element) => {
    if (element[0].match(alphabet) && element[0] === element[0].toLowerCase()) {
      string.push(element);
    }
  });

  return string.join(' ');
}

/*
REFACTORED SOLUTION -

Instead of mapping thru the split string twice, and using if conditionals; 
we can create two separate arrays containing elements beginning with upper 
case and lower case. Within the conditions of the filter, rather than 
hardcoding to check for casing, we can apply match and regex to look for 
matches to either all upper case or lower case letters. With the two arrays 
exisiting, we can then use Array.concat() to bring the elements together in 
proper order. Lastly we apply the join method to make the return a string again.
*/

function capitalsFirst(str) {
  str = str.split(' ');

  let uppercase = str.filter((element) => element[0].match(/[A-Z]/g));
  let lowercase = str.filter((element) => element[0].match(/[a-z]/g));

  return uppercase.concat(lowercase).join(' ');
}
