function diagonalSum(matrix) {
  let diagonal = 0;

  for (let i = 0; i < matrix.length; i++) {
    diagonal += matrix[i][i];
  }

  return diagonal;
}
