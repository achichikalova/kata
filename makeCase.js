const makeCase = function(input, style) {
  const priority = ['camel', 'pascal', 'snake', 'kebab', 'title', 'vowel', 'consonant', 'upper', 'lower'];

  //Kind of library of styles:
  const camel = input.replace(/\s[a-z]/g, function($1) { return $1.toUpperCase(); })
                     .replace(/\s/g, '');
  const pascal = input.replace(/(\w)(\w)/g, function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();})
                      .replace(/\s/g, '');
  const snake = input.replace(/\s/g, '_');               
  const kebab = input.replace(/\s/g, '-');
  const title = input.replace(/(\w)(\w)/g, function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();});
  const vowel = input.replace(/[a,o,u,e,i]/g, function($1) { return $1.toUpperCase(); });
  const consonant = input.replace(/[b-df-hj-np-tv-z]/g, function($1) { return $1.toUpperCase();});
  const upper = input.toUpperCase();
  const lower = input.toLowerCase();


  //Getting the result:
  let result;

  if (!Array.isArray(style)) {
    result = eval(style); //I decided to use the eval() besause we are getting values from trusted source :)
  } else if (Array.isArray(style)) {
    let ranked = priority.filter(s => style.includes(s));
    for (let i = 0; i < ranked.length; i++) {
      console.log(input + ' => before') //output here after snake => this_is_a_string => before --- the snake worked
      input = eval(ranked[i]);
      console.log(input + ' => after') //but here after upper => THIS IS A STRING => after --- but here it was rewrited? 
                                       //I can't get it, needs some help here, thank you
    }
    result = input;
  }

  return result;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", ["upper", "snake"]));
//console.log(makeCase("this is a string", ["upper", "kebab", "title"]));