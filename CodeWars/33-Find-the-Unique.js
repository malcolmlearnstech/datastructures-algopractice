function findUniq(arr) {
  let unique = 0;
  arr.forEach((element) => {
    if (arr.indexOf(element) === arr.lastIndexOf(element)) {
      unique += element;
    }
  });
  return unique;
}

function findUniq(arr) {
  return Number(
    arr.filter((element) => arr.indexOf(element) === arr.lastIndexOf(element))
  );
}
