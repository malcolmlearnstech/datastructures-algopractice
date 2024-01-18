function getOrder(input) {
  let menu = {
    burger: [],
    fries: [],
    chicken: [],
    pizza: [],
    sandwich: [],
    onionrings: [],
    milkshake: [],
    coke: [],
  };

  let item = '';
  let properOrder = [];

  for (let i = 0; i < input.length; i++) {
    item += input[i];

    if (menu[item]) {
      menu[item].push(1);
      item = '';
    }
  }

  for (const key in menu) {
    while (menu[key].length > 0) {
      properOrder.push(key.slice(0, 1).toUpperCase() + key.slice(1));
      menu[key].pop();
    }
  }

  return properOrder.join(' ');
}
