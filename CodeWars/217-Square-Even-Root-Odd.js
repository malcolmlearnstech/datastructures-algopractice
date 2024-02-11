const sumSquareEvenRootOdd = (ns) => {
  let newList = ns.map((element) => {
    if (element % 2 === 0) {
      return Math.pow(element, 2);
    } else return Math.sqrt(element);
  });

  return Number(
    newList.reduce((acc, currentVal) => acc + currentVal).toFixed(2)
  );
};
