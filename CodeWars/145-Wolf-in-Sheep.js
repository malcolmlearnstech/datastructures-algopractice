function warnTheSheep(queue) {
  let lastIndex = queue.length - 1;

  return queue[lastIndex] === 'wolf'
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${
        lastIndex - queue.indexOf('wolf')
      }! You are about to be eaten by a wolf!`;
}
