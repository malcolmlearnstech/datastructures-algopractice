function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

/*
REFACTORED SOLUTION -

For some better readability, we can redefine 'usd' as containing what the 
logic from the template literal. This allows a shorter line in the final 
return as only 'usd' has to be referred to in the JSX section of the 
template literal.
*/
