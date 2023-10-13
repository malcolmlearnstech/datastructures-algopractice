function nicknameGenerator(name) {
  if (name.length >= 4) {
    return name[2].match(/[aeiouAEIOU]/g)
      ? name[0] + name[1] + name[2] + name[3]
      : name[0] + name[1] + name[2];
  } else {
    return 'Error: Name too short';
  }
}

/*
REFACTOR SOLUTION -

Alternative to hardcoding the return name, we 
can use the slice method, and programmatically indicate 
where the displaying strings should stop.
*/

function nicknameGenerator(name) {
  if (name.length < 4) {
    return 'Error: Name too short';
  } else {
    return name[2].match(/[aeiou]/gi) ? name.slice(0, 4) : name.slice(0, 3);
  }
}
