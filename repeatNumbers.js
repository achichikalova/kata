const repeatNumbers = function(data) {
  let number;
  let times;
  let repeat = '';

  for (let array of data) {
    number = array[0];
    times = array[1];
    while (times > 0) {
      repeat += number;
      times--;
    }
    repeat += ', ';
  }

  return repeat;
  
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));