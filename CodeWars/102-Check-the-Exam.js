function checkExam(array1, array2) {
  let score = 0;

  array2.map((element, index) => {
    if (element === array1[index]) {
      score += 4;
    } else if (element === '') {
      score += 0;
    } else if (element !== array1[index]) {
      score -= 1;
    }
  });

  return score < 0 ? 0 : score;
}
