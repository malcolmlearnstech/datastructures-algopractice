var number = function (busStops) {
  let passengers = 0;

  for (let i = 0; i < busStops.length; i++) {
    passengers += busStops[i][0];
    passengers -= busStops[i][1];
  }
  return passengers;
};

/*
REFACTORED SOLUTION -

Alternative within the for loop is to just add and subtract 
the riders that board and depart to passengers variable in one line.
*/

var number = function (busStops) {
  let passengers = 0;

  for (let i = 0; i < busStops.length; i++) {
    passengers += busStops[i][0] - busStops[i][1];
  }
  return passengers;
};

/*
REFACTORED SOLUTION -

An appended map can be used as alternative to the for loop. 
You also do not have to use i because map naturally iterates 
over each element.
*/
