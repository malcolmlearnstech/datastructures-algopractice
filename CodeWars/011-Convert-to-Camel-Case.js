function toCamelCase(str){
 let newStr= ''
 
 for (let i = 0; i < str.length; i++){
   
   if (str[i] !== '_'  && str[i] !== '-'){
     newStr += str[i]
     
   } else {
     i++ ;
     let capitalized = str[i].toUpperCase();
     newStr += capitalized;
   }
 }
  return newStr;
}
