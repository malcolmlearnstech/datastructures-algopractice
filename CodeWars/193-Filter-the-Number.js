var filterString = function (value) {
  let nums = '';

  value = value.split('').filter((element) => element.match(/[^a-zA-Z]/g));

  for (const element of value) {
    nums += element;
  }
  return parseInt(nums);
};
