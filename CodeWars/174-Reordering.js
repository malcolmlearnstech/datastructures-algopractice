function reOrdering(text) {
  let newOrder = [];
  text = text.split(' ');

  newOrder.push(
    text.filter((element) => element[0] === element[0].toUpperCase())[0]
  );
  text.map((element) => {
    if (element[0] !== element[0].toUpperCase()) {
      newOrder.push(element);
    }
  });

  return newOrder.join(' ');
}

/*
REFACTORED SOLUTION -

Instead pushing the elements by condition into an array, we 
can create variables to hold the elements matching both 
conditions (word beginning with a capital letter and words 
that do not). At the end of the function we return a shallow 
copy of both arrays, which keep them from being two 
dimensional, then apply the join method, as all elements will 
be held in a single dimensional array.
*/

function reOrdering(text) {
  text = text.split(' ');

  let first = text.filter((element) => element[0] === element[0].toUpperCase());
  let second = text.filter(
    (element) => element[0] !== element[0].toUpperCase()
  );

  return [...first, ...second].join(' ');
}
