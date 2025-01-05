function mergeArrays(arr1, arr2) {
  let merge = [];
  arr1.map((element) => merge.push(element));
  arr2.map((element) => {
    if (!merge.includes(element)) {
      merge.push(element);
    }
  });

  return merge.sort((a, b) => a - b);
}
