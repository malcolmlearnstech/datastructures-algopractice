function gimmeTheLetters(sp) {
  let output = '';
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let endpoints = sp.split('-').map((element) => element.toLowerCase());
  let idx = alphabet.indexOf(endpoints[0]);

  while (idx <= alphabet.indexOf(endpoints[1])) {
    output += alphabet[idx];
    idx++;
  }

  return sp[0] === sp[0].toLowerCase() ? output : output.toUpperCase();
}

/*REFACTORED SOLUTION -

We can use the charCodeAt() method, to create start and endpoints, because as we 
iterate in our loop - the proper letters will follow one another in the same 
alphabetical sequence due to character coding. Within the loop, we make sure to 
use the fromCharCode() method to turn the codes back into the corresponding 
letters before adding them to the input string. Because we are using character 
codes and examining the actual letter characters themselves, we don't have to worry 
about the casing, as lower case and upper case letters exist in different sets of 
character codes.
*/

function gimmeTheLetters(sp) {
  sp = sp.split('-');
  let output = '';
  let start = sp[0].charCodeAt();
  let end = sp[1].charCodeAt();

  for (let i = start; i <= end; i++) {
    output += String.fromCharCode(i);
  }

  return output;
}
