function minValue(values) {
  let digits = [];
  values.map((element) => {
    if (!digits.includes(element)) {
      digits.push(element);
    }
  });
  return Number(digits.sort((a, b) => a - b).join(''));
}
