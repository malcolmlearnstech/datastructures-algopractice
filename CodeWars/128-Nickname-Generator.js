function nicknameGenerator(name) {
  if (name.length >= 4) {
    return name[2].match(/[aeiouAEIOU]/g)
      ? name[0] + name[1] + name[2] + name[3]
      : name[0] + name[1] + name[2];
  } else {
    return 'Error: Name too short';
  }
}
