const instructorWithLongestName = function(instructors) {
  let nameLen = 0;
  let name;
  for (instructor of instructors){
    if (instructor.name.length > nameLen) {
      nameLen = instructor.name.length;
      name = instructor;
    };
  }
  return name;  
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));