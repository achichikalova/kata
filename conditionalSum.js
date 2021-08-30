const conditionalSum = function(values, condition) {
  let result = [];    
  if (values.length != 0) {
    if (condition === "even") {
      for (value of values) {
        if (value % 2 === 0) {
          result.push(value);
        }
      }
    } else if (condition === "odd") {
      for (value of values) {
        if (value % 2 != 0) {
          result.push(value);
        } 
      }
    }    
    return result.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  } else { 
    return 0;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
console.log(conditionalSum([2, 6, 10], "odd"));