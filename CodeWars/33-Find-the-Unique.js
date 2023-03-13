function findUniq(arr) {
  let unique = 0;
  arr.forEach((element) => {
    if (arr.indexOf(element) === arr.lastIndexOf(element)) {
      unique += element;
    }
  });
  return unique;
}

/*
REFACTORED CODE - We essential perform the same check as above code, but we place the conditions
of the check on each number as the filtering condition, because the return would be an element in
an array, we then wrap the return in a to Number method
*/
function findUniq(arr) {
  return Number(
    arr.filter((element) => arr.indexOf(element) === arr.lastIndexOf(element))
  );
}

function findUniq(arr) {
  return arr.filter(
    (element) => arr.indexOf(element) === arr.lastIndexOf(element)
  )[0];
}
