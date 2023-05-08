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
