const squareCode = function(message) {
  let input = message.replace(/\s/g, '');
  let maxWidth = Math.ceil(Math.sqrt(input.length));

  let codedMessage = '';

  for (let i = 0; i < maxWidth; i++) { 
    for (let j = i; j < input.length; j += maxWidth) {
      codedMessage += input[j];
    }
    codedMessage += ' '; //in assignment was asked inline output
    //codedMessage += '\n'; //in case we needed 'square' output
  }

  return codedMessage;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));