const numberOfVowels = function(data) {
  let vowels = ['a', 'o', 'u', 'i', 'e'];
  let result = 0;
  let dataArr = data.split('');
  for (letter of dataArr) {
    if (vowels.includes(letter)) {
      result ++;
    }
  }
  return result;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));