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
