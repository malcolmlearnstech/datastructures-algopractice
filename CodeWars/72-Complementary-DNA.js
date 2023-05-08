function DNAStrand(dna) {
  let chemicals = {
    A: 'T',
    C: 'G',
    T: 'A',
    G: 'C',
  };
  dna = dna.split('').map((element) => {
    if (chemicals[element]) {
      return (element = chemicals[element]);
    }
  });
  return dna.join('');
}

/*
REFACTORED SOLUTION:

All methods used on the input variable 'dna' can be appended together. 
We can also tell map to reassign as it iterates, as an alternative to 
the conditional used in the initial solution.
*/

function DNAStrand(dna) {
  let chemicals = {
    A: 'T',
    C: 'G',
    T: 'A',
    G: 'C',
  };
  return dna
    .split('')
    .map((element) => (element = chemicals[element]))
    .join('');
}
