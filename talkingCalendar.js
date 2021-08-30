const talkingCalendar = function(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];

  //get value from date:
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  let month = newDate.getMonth();
  let day = newDate.getDate();  

  
  //reassign date value to a human readable type:
  month = months[month];
  
  if (day === 1) {
    day = '1st'
  } else if(day === 2) {
    day = '2nd'
  } else if (day === 2) {
    day = '3rd'
  } else {
    day = day + 'th'
  }

  //get new date:
  let result = month + ' ' + day + ', ' + year

  return result;  
  
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));