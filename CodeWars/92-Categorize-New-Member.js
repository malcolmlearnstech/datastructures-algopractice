function openOrSenior(data) {
  let categories = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      categories.push('Senior');
    } else categories.push('Open');
  }
  return categories;
}

/*
REFACTORED SOLUTION -

As an alternative to the for loop, we can employ the map and tell 
the map the same conditions for "Open" or "Senior". We are also able 
to just return the result strings, instead of pushing them into an 
initialized array. The map naturally returns an array on its own.

*/

function openOrSenior(data) {
  let categories = data.map((element) => {
    if (element[0] >= 55 && element[1] > 7) {
      return 'Senior';
    } else {
      return 'Open';
    }
  });

  return categories;
}

/*
REFACTORED SOLUTION -

Because the map naturally returns an array on its own, we can define 
the results of the map as the new value of our "data" input. Additionally, 
as we are using a conditional statement with only if and else for the 
map, we can use a ternary for outputting within the map as an alternative.

*/
