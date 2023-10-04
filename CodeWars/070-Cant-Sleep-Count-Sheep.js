var countSheep = function (num) {
  let string = '';
  for (let i = 0; i < num; i++) {
    string += `${i + 1} sheep...`;
  }
  return string;
};
