function openOrSenior(data) {
  let categories = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      categories.push('Senior');
    } else categories.push('Open');
  }
  return categories;
}
