function killCount(counselors, jason) {
  let survivors = [];

  counselors = counselors.filter((element) => element[1] < jason);

  for (const element of counselors) {
    survivors.push(element[0]);
  }
  return survivors;
}
