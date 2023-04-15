function friend(friends) {
  let notFoes = [];

  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      notFoes.push(friends[i]);
    }
  }
  return notFoes;
}
