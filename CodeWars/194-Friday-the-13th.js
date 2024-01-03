function killCount(counselors, jason) {
  let survivors = [];

  counselors = counselors.filter((element) => element[1] < jason);

  for (const element of counselors) {
    survivors.push(element[0]);
  }
  return survivors;
}

/*
REFACTORED SOLUTION -

We can alternatively build out and object holding all of the applicable counselors 
and their intelligence as key/value pairs. Once built, we simply use the 
Object.keys() method to return all of the counselor name keys in an array.

*/
