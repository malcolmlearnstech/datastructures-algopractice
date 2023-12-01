function stringTransformer(str) {
  str = str.split(' ').reverse();

  return str
    .map((element) =>
      element
        .split('')
        .map((item) => {
          return item === item.toUpperCase()
            ? item.toLowerCase()
            : item.toUpperCase();
        })
        .join('')
    )
    .join(' ');
}
