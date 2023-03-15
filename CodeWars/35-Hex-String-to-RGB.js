function hexStringToRGB(hexString) {
  let numsOnly = hexString.split('').splice(1);
  let array = [[], [], []];
  let newArray = [];
  let i = 0;

  numsOnly.forEach((element) => {
    if (array[i].length < 2) {
      array[i].push(element);
    } else {
      array[i] = array[i].join('');
      i++;
      array[i].push(element);
    }
  });

  if (i === array.length - 1) {
    array[i] = array[i].join('');
  }
  for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i], 16);
  }

  let object = { r: array[0], g: array[1], b: array[2] };

  return object;
}
