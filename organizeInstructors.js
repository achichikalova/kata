const organizeInstructors = function(instructors) {
  let result = {};

  for (let instructor of instructors){
    let course = instructor.course;

    if (course in result){
      result[course].push(instructor.name);
    } else {
      result[course] = [instructor.name];
    }

  }

  return result;

  };

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));