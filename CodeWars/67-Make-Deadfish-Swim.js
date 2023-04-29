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
