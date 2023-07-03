function diagonalSum(matrix) {
  let diagonal = 0;

  for (let i = 0; i < matrix.length; i++) {
    diagonal += matrix[i][i];
  }

  return diagonal;
}

/*
REFACTORED SOLUTION -

We can alternative use the map method to iterate through the 
input matrix. As map naturally touches each element of the array 
it is appended to, we also only have to reference index once.
*/
