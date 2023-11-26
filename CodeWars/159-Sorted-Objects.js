function sortList(sortBy, list) {
  console.log(list, sortBy);
  return list.sort((a, b) => b[sortBy] - a[sortBy]);
}
