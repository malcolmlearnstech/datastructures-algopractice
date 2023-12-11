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
