const camelCase = function(input) {
  return input
        .replace(/\s[a-z]/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')     
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));