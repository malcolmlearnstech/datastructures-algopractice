function whoIsPaying(name) {
  if (name.length > 2) {
    return [name, name[0] + name[1]];
  } else return [name];
}

/*REFACTORED SOLUTION -

Let's take this "if-else statement" and turn it into a one 
liner using a ternary operator*/
