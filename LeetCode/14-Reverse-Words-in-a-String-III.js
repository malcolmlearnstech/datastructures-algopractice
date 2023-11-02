var reverseWords = function (s) {
  let flipped = [];

  s = s.split(' ');
  s.map((element) => {
    flipped.push(element.split('').reverse().join(''));
  });

  return flipped.join(' ');
};
