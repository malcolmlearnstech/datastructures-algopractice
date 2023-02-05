function countSheeps(arrayOfSheep) {
  let count = 0;

  let sheepCheck = (element) => {
    if (element === true) {
      count++;
    }
  };
  arrayOfSheep.forEach(sheepCheck);
  return count;
}
