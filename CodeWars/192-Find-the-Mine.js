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

/*
REFACTORED SOLUTION -

We don't have to use the "column" and "row" variables and having to increment/reset 
them within the scope of their loops. We can instead, directly use the respective "i" 
and "j" counts that are implemented in the expressions of both for-loops. They can 
both also be used to directly access elements needed to check within the built out 
conditionals. This may potentially slightly decrease the space complexity.
*/

function mineLocation(field) {
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] === 1) {
        return [i, j];
      }
    }
  }
}
