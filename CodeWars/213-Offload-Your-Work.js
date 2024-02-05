function workNeeded(projectMinutes, freelancers) {
  freelancers.map((element) => {
    projectMinutes -= element[0] * 60 + element[1];
  });

  if (projectMinutes < 1) {
    return 'Easy Money!';
  } else {
    let hours = Math.floor(projectMinutes / 60);
    let minutes = projectMinutes % 60;
    return `I need to work ${hours} hour(s) and ${minutes} minute(s)`;
  }
}

/*
REFACTORED SOLUTION -

We can use a ternary operator instead of the if...else logic. Additionaly, rather than creating new variables ("hours" and "minutes"), we can employ the logic for them within the second result of our ternary operator.
*/
