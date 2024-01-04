function longer(s) {
  return s
    .split(' ')
    .sort()
    .sort((a, b) => a.length - b.length)
    .join(' ');
}

/*
REFACTORED SOLUTION - 

In a more extensive manner, we can build out an object with string length counts 
as the keys. The corresponding values for each key would be an array housing 
strings from the input of that key's length. We can then traverse through each 
key-value pair, ultimately sorting the strings if housing more than one; finally 
allowing us to push the elements within the values to an "orderedString" array. 
Lastly, we return the newly ordered string from the "orderedString" array, using 
the join() method.
*/
