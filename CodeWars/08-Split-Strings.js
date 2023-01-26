/*

Q - Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

*/

function solution(str){
   let result = [];
  let newStr = '';
  
  if (str.length % 2 !== 0){
    str += '_'
  }
  
  for (let i=0; i < str.length; i++){
    while (newStr.length < 2){
      newStr += str[i] 
      i++; 
    }
    result.push(newStr);
    newStr = '';
    i--; 
  }
  
  return result
}
