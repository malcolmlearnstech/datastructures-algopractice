function parse(data) {
  let initialValue = 0;
  let output = [];
  let commands = {
    i: function () {
      return initialValue++;
    },
    d: function () {
      return initialValue--;
    },
    s: function () {
      return (initialValue *= initialValue);
    },
    o: function () {
      output.push(initialValue);
    },
  };

  for (let i = 0; i < data.length; i++) {
    if (commands[data[i]]) {
      commands[data[i]](initialValue);
    }
  }
  return output;
}

/*
REFACTORED SOLUTION:

The function values in each property of the object 
can also be set to perform their actions without the use of "return"
*/

function parse(data) {
  let initialValue = 0;
  let output = [];
  let commands = {
    i: function () {
      initialValue++;
    },
    d: function () {
      initialValue--;
    },
    s: function () {
      initialValue *= initialValue;
    },
    o: function () {
      output.push(initialValue);
    },
  };

  for (let i = 0; i < data.length; i++) {
    if (commands[data[i]]) {
      commands[data[i]](initialValue);
    }
  }
  return output;
}

/*
REFACTORED SOLUTION:

An alternative to storing functions in an object is to 
follow the behavior but, make use of a switch statement to 
determine each action as we loop thru the input string
*/

function parse(data) {
  let initialValue = 0;
  let output = [];

  for (let i = 0; i < data.length; i++) {
    let currentCharacter = data[i];
    switch (currentCharacter) {
      case 'i':
        initialValue++;
        break;
      case 'd':
        initialValue--;
        break;
      case 's':
        initialValue *= initialValue;
        break;
      case 'o':
        output.push(initialValue);
        break;
    }
  }
  return output;
}
