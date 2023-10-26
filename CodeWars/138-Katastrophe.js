function strongEnough(eartquake, age) {
  let magnitude = 1;
  let buildingStrength = 1000;

  for (let i = 1; i <= age; i++) {
    buildingStrength -= buildingStrength * 0.01;
  }

  earthquake.map((element) => {
    magnitude *= element.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  });

  return buildingStrength > magnitude ? 'Safe!' : 'Needs Reinforcement!';
}
