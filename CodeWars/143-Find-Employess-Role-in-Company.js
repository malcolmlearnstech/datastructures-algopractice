function findEmployessRole(name) {
  name = name.split(' ');

  for (let i = 0; i < employees.length; i++) {
    if (
      employees[i]['firstName'] === name[0] &&
      employees[i]['lastName'] === name[1]
    ) {
      return employees[i]['role'];
    }
  }

  return 'Does not work here!';
}
