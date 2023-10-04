function filterList(l) {
  let newList = [];

  l.forEach((element) => {
    if (typeof element === 'number') {
      newList.push(element);
    }
  });
  return newList;
}

/*  REFACTORED CODE:

Because we know what we are supposed to seek out, we can now use the conditional from our inital code's if and use that as the basis for what we filter out.
*/
function filterList(l) {
  return l.filter((element) => typeof element === 'number');
}
