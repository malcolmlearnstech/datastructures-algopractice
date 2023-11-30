function calculate(string) {
  string = string.split(' ');
  let nums = string
    .filter((element) => element.match(/[\d]/g))
    .map((element) => (element = Number(element)));

  if (string.includes('gains')) {
    return nums[0] + nums[1];
  } else if (string.includes('loses')) {
    return nums[0] - nums[1];
  }
}
