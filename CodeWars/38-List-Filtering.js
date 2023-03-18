function filterList(l) {
  let newList = [];

  l.forEach((element) => {
    if (typeof element === 'number') {
      newList.push(element);
    }
  });
  return newList;
}

function filterList(l) {
  return l.filter((element) => typeof element === 'number');
}
