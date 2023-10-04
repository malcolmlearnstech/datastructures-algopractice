function DNAtoRNA(dna) {
  let translate = '';
  
  for (let i = 0; i < dna.length; i++){
    if (dna[i] === 'G' || dna[i] === 'C' || dna[i] === 'A'){
      translate += dna[i]
    } else {
      translate += 'U'
    } 
  }
  
  return translate
}
