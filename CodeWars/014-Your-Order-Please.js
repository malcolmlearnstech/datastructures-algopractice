function order(words) {
  let group = words.split(' ');
  let newArray = [];
  let numberTest = 1;

  while (newArray.length < group.length) {
    let search = group.find((element) => element.includes(numberTest));
    newArray.push(search);
    numberTest++;
    //console.log(newArray)
  }
  let finalString = newArray.join(' ');

  return finalString;
}
