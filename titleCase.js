const titleCase = str => {
  return str.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
};



console.log(titleCase("this is an example")); // ==> should return "This Is An Example"
console.log(titleCase("test")) //should return "Test"
console.log(titleCase("i r cool")) //should return "I R Cool"
console.log(titleCase("WHAT HAPPENS HERE")) //should return "What Happens Here"
console.log(titleCase("A")) //should return "A"