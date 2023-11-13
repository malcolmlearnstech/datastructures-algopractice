function findScreenHeight(width, ratio) {
  let string = '';

  ratio = ratio.split(':');

  string += width + 'x' + (width * Number(ratio[1])) / Number(ratio[0]);

  return string;
}

/*
REFACTORED SOLUTION -

Rather than create a new variable then adding each of the 
calculated numbers to the created variable string, we can 
set the function up to return a template literal. This 
will also decrease our space complexity.
*/

function findScreenHeight(width, ratio) {
  ratio = ratio.split(':');

  return `${width}x${(width * Number(ratio[1])) / Number(ratio[0])}`;
}
