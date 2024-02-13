const orderedCount = function (text) {
  let frequency = new Map();
  let chronological = [];

  for (let i = 0; i < text.length; i++) {
    if (!frequency.has(text[i])) {
      frequency.set(text[i], 1);
    } else frequency.set(text[i], frequency.get(text[i]) + 1);
  }

  frequency.forEach((value, key) => {
    chronological.push([key, value]);
  });

  return chronological;
};
