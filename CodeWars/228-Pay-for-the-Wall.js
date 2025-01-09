function whoIsPaying(name) {
  if (name.length > 2) {
    return [name, name[0] + name[1]];
  } else return [name];
}
