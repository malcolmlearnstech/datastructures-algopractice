function removeUrlAnchor(url) {
  let begin = 0;
  let end = url.indexOf('#');

  return end > 0 ? url.slice(begin, end) : url;
}
