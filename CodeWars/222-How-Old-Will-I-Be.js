function calculateAge(birthYear, randomYear) {
  if (Math.abs(randomYear - birthYear) === 1) {
    if (birthYear < randomYear) {
      return 'You are 1 year old.';
    } else return 'You will be born in 1 year.';
  } else if (Math.abs(randomYear - birthYear) > 1) {
    if (birthYear < randomYear) {
      return `You are ${randomYear - birthYear} years old.`;
    } else return `You will be born in ${birthYear - randomYear} years.`;
  } else return 'You were born this very year!';
}
