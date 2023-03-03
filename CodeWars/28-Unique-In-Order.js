function uniqueOrder(iterable) {
  let newOrder = [];

  for (let i = 0; i < iterable.length; i++) {
    let previousElement = iterable[i - 1];
    let currentElement = iterable[i];

    if (currentElement !== previousElement) {
      newOrder.push(currentElement);
    }
  }
  return newOrder;
}
