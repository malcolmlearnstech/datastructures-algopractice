function mineLocation(field) {
  let row = 0;

  for (let i = 0; i < field.length; i++) {
    let currentRow = field[i];
    let column = 0;

    for (let j = 0; j < currentRow.length; j++) {
      if (currentRow[j] === 1) {
        return [row, column];
      }
      column++;
    }
    row++;
  }
}
