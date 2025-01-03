function findNeedle(haystack) {
  let pos;
  haystack.map((element, index) => {
    if (element === 'needle') {
      pos = index;
    }
  });

  return `found the needle at position ${pos}`;
}
