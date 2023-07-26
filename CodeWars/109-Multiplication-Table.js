multiplicationTable = function (size) {
  let table = [];
  let start = 1;
  let step = 1;

  while (table.length < size) {
    let row = [];

    while (row.length < size) {
      row.push(start);
      start += step;
    }
    table.push(row);
    start = table[table.length - 1][0] + 1;
    step = start;
  }
  return table;
};
