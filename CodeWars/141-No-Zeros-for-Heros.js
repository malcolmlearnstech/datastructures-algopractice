function noBoringZeros(n) {
  n = String(n).split('');

  for (let i = n.length - 1; n[i] === '0'; i--) {
    n[i] = '';
  }

  return Number(n.join(''));
}

/*REFACTORED SOLUTION -

Within the for-loop, we can alternatively apply the replace 
method with a regex pattern to eliminate any zeros.
*/

function noBoringZeros(n) {
  n = String(n).split('');

  for (let i = n.length - 1; n[i] === '0'; i--) {
    n[i] = n[i].replace(/[0]/g, '');
  }

  return Number(n.join(''));
}
