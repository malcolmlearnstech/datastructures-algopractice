function findHack(arr) {
  let array = [];
  let scoreWorth = {
    A: 30,
    B: 20,
    C: 10,
    D: 5,
  };

  let scoresCheck = (score) => score === 'A' || score === 'B';

  for (const element of arr) {
    let sum = 0;

    for (let i = 0; i < element[2].length; i++) {
      if (scoreWorth[element[2][i]]) {
        sum += scoreWorth[element[2][i]];
      }
    }

    if (element[1] > 200) {
      array.push(element[0]);
    } else {
      if (element[2].length >= 5 && element[2].every(scoresCheck)) {
        sum += 20;
      }

      if (element[1] !== sum) {
        array.push(element[0]);
      }
    }
  }
  return array;
}
