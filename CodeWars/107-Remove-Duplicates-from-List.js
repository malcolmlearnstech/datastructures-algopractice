function distinct(a) {
  let result = [];
  let visited = {};

  for (let i = 0; i < a.length; i++) {
    if (!visited[a[i]]) {
      visited[a[i]] = 1;
    } else {
      visited[a[i]]++;
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (visited[a[i]]) {
      result.push(a[i]);
      delete visited[a[i]];
    }
  }

  return result;
}
