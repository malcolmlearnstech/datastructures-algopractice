function friend(friends) {
  let notFoes = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      notFoes.push(friends[i]);
    }
  }
  return notFoes;
}

/*
REFACTORED SOLUTION:
Rather than using conditional check, we can employ filter to 
narrow our array down the array to strings longer than 4 characters.
*/

function friend(friends) {
  return friends.filter((element) => element.length === 4);
}
