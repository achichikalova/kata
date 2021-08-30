const sumLargestNumbers = function(data) {
  let numbersSorted = data.sort((a, b) => b-a);
  return numbersSorted[0] + numbersSorted;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3, 100]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));