function bmi(weight, height) {
  let index = weight / (height * height);

  if (index <= 18.5) {
    return 'Underweight';
  } else if (index <= 25.0) {
    return 'Normal';
  } else if (index <= 30.0) {
    return 'Overweight';
  } else return 'Obese';
}

//REFACTORED SOLUTION

/*
Setup is still very similar. In this instance, we just use switch statement. 
The switch will hold "true" and will check for case will evaluate to the same value
*/

function bmi(weight, height) {
  let index = weight / (height * height);

  switch (true) {
    case index <= 18.5:
      return 'Underweight';
    case index <= 25.0:
      return 'Normal';
    case index <= 30.0:
      return 'Overweight';
    default:
      return 'Obese';
  }
}
