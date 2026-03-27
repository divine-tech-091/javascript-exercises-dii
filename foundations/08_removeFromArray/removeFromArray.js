const removeFromArray = function(Arr, ...Arg) {

 const removeItem = new Set(Arg);
 
 let ArrRemove = Arr.filter((item) => { 
  return !removeItem.has(item) 
 });
  
 return ArrRemove;
};
const initial = [1, 2, 3];
removeFromArray(initial,  "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
