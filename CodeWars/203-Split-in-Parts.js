var splitInParts = function (s, partLength) {
  let array = [];
  s = s.split('');

  while (s.length > 0) {
    let chunk = s.slice(0, partLength).join('');
    array.push(chunk);
    s.splice(0, partLength);
  }

  return array.join(' ');
};
