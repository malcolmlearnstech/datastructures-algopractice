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

/*
REFACTORED SOLUTION -

Rather than initializing a "pairs" variable, then iterating through the values 
of each key-value pair, we can make use of the Object.values() method. By 
implementing Object.values(), we will have an array generated with just values, 
which we can then add all together. The best way to go about return the value 
of these array elements added together is via the .reduce() method. In the 
context of the reduce method, we place the logic for determining amount of pairs 
(Math.floor() method applied to element divided by 2) in the place of 
"currentValue". By giving our reduce method an "initialValue" of 0, this will 
ensure that we begin with 0 and the "currentValue" logic will begin with our 
first element, continuing to add from there.
*/

function numberOfPairs(gloves) {
  let inventory = {};

  gloves.map((element) => {
    !inventory[element] ? (inventory[element] = 1) : inventory[element]++;
  });

  return Object.values(inventory).reduce(
    (acc, currentVal) => acc + Math.floor(currentVal / 2),
    0
  );
}
