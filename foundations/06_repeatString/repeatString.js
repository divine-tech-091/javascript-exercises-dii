const repeatString = function(string, num) {
  
  let strings = '';
  for (let index = 0; index < num; index++) {
     strings += string;
  }
   
   if(num === -1) {
    return 'ERROR'; 
  }
  return strings;

};
// const number = Math.floor(Math.random() * 1000);

repeatString(' ', 10);

// for (let index = 0; index < number; index++) {
//  repeatString();
// }
// Do not edit below this line
module.exports = repeatString;
