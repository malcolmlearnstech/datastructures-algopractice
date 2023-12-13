function reverseMiddle(array) {
  let frontRemoved = array.slice(array.length / 2 - 1);
  frontRemoved.splice(-1 * (array.length / 2 - 1));

  return frontRemoved.reverse();
}

/*
REFACTORED SOLUTION -

Rather than the complicated process of figuring out how to 
account for what's left over of the array versus how to 
manipulate the array, we can create a for loop. For each 
iteration of the loop, using the same calculation from the 
intitial solution, we can set up the array to remove one 
element from the front and one element from the end of the 
input array.
*/
