function numberOfPairs(gloves) {
  let inventory = {};
  let pairs = 0;

  gloves.map((element) => {
    !inventory[element] ? (inventory[element] = 1) : inventory[element]++;
  });

  for (const key in inventory) {
    inventory[key] % 2 === 0
      ? (pairs += inventory[key] / 2)
      : (pairs += Math.floor(inventory[key] / 2));
  }
  return pairs;
}
