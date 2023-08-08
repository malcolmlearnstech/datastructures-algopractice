var findRelativeRanks = function (score) {
  let sortedScores = [...score].sort((a, b) => b - a);

  return score.map((element, index) => {
    if (element === sortedScores[0]) {
      return 'Gold Medal';
    } else if (element === sortedScores[1]) {
      return 'Silver Medal';
    } else if (element === sortedScores[2]) {
      return 'Bronze Medal';
    } else {
      return `${sortedScores.indexOf(element) + 1}`;
    }
  });
};
