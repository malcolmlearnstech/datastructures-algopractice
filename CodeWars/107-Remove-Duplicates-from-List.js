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

/*
REFACTORED SOLUTIONS-

Using the object and array still, we can set the function to only 
push the number  we're on as long as the number being iterated over 
is NOT already in the object.
*/
