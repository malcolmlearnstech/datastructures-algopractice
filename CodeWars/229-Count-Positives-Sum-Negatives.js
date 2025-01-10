function countPositivesSumNegatives(input) {
  let positives = 0;
  let negatives = 0;

  if (input === null || input.length < 1) {
    return [];
  }

  input.map((element) => {
    Math.sign(element) === 1 ? positives++ : (negatives += element);
  });

  return [positives, negatives];
}

/*
REFACTORED SOLUTION -

To keep all of the full methods contained on one space for context, 
account for the potential outliers first as an if condition; 
then perform the rest within the context of the else portion.
*/

function countPositivesSumNegatives(input) {
  if (input === null || input.length < 1) {
    return [];
  } else {
    let positives = 0;
    let negatives = 0;

    input.map((element) => {
      Math.sign(element) === 1 ? positives++ : (negatives += element);
    });

    return [positives, negatives];
  }
}

/*
SECOND REFACTORED SOLUTION -

If you wanted to set this up for a shorter setup, you can make 
use of the fact that all of these methods occur within the if/else 
context. With that established context, we can set up a ternary; 
setting the outliers as the conditional. To account for the amount 
of positives, we can employ a filter with the condition for 
positive and for the negative, we also use filter, then apply 
reduce to count out the sum.
*/
