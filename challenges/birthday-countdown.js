/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

/*
function daysUntilDate(todaysDate,birthdate) {
    

    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var todaysDate = new Date();
    var birthdate = new Date(2008,01,22);
//subtract the current Date from the Birthday
    var diffDays = Math.round(Math.abs((todaysDate.getTime() - birthdate.getTime())/(oneDay)));
*/


function daysUntilDate(dateIn) {

  var now = new Date();
  console.log(dateIn);
  // var monthIn = (parseInt(dateIn[0] + dateIn[1]) + 1);
  // var daysIn = dateIn[3] + dateIn[4];
  // var yearIn = dateIn[6] + dateIn[7] + dateIn[8] + dateIn[9];
  // console.log("birthday is " + dateIn);
  //var dayInDate = new Date(yearIn, monthIn, daysIn);
  var dayInDate = new Date(dateIn);

  var daysUntilDate = dayInDate.getTime() - now.getTime();
  daysUntilDate =Math.ceil(daysUntilDate / 1000 / 60/ 60/24);
  console.log(daysUntilDate);
  return (daysUntilDate);

}

daysUntilDate("10/03/2017")
function helper (dob_elem) {
  var nextDob = 
  return (dob_elem.name + "'s birthday is in " + 
}

function birthdayReminder(dob_array){

  return don_array.map(helper)
}


