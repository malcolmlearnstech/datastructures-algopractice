function rakeGarden(garden) {
  garden = garden.split(' ');

  garden = garden.map((element) => {
    if (element !== 'gravel' && element !== 'rock') {
      return 'gravel';
    } else {
      return element;
    }
  });

  return garden.join(' ');
}
