function sillycase(silly) {
  let middle = Math.ceil(silly.length / 2);
  silly = silly.toLowerCase().split('');

  for (let i = silly.length - 1; i >= middle; i--) {
    silly[i] = silly[i].toUpperCase();
  }
  return silly.join('');
}
