function hello(name) {
  return name
    ? `Hello, ${name[0].toUpperCase() + name.slice(1).toLowerCase()}!`
    : 'Hello, World!';
}

/*
REFACTORED SOLUTION -

For even more efficiency/precision the entire ternary can be placed with the JSX reference, 
deciding whether a name will be placed or "World" will be, then continuing the template literal.
*/

function hello(name) {
  return `Hello, ${
    name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : 'World'
  }!`;
}
