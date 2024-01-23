/*
	NAME: Dav Blakeley
	DATE: 2024/01/23
	CLASS: GEX Jr
	PURPOSE: Working with Date
*/
// let registration = new Date(2020, 0, 7, 8, 30);

// console.log(registration);
// console.log(`Year: ${registration.getFullYear()}`);
// console.log(`Month(index): ${registration.getMonth()}`);
// console.log(`Day of Week(index): ${registration.getDay()}`);
// console.log(`Date: ${registration.getDate()}`);
// console.log(`Hours: ${registration.getHours()}`);
// console.log(`Minutes: ${registration.getMinutes()}`);
// console.log(`Seconds: ${registration.getSeconds()}`);

// let now = new Date();
// console.log(now);
// console.log(`Now Hours: ${now.getHours()}`);
// console.log(`Now Minutes: ${now.getMinutes()}`);
// console.log(`Now Seconds: ${now.getSeconds()}`);
// console.log(`Now MS: ${now.getMilliseconds()}`);




// ------------------------------------------------

// 6. Create a new variable called nextDate. Set it to your birthDate plus the number of days calculated in the days variable
// 7. Create a new variable called newDate. Use the Date constructor to set this variable to your birthDate. Use the date parts from your birthDate variable in the constructor.
// 8. Set the newDate using the setDate method and using the value calculated in nextDate
// 9. Console log the newDate variable
// 10. Create a varable age and set it by subtracting the newDate year from the birthDate year
// 11. Display the message 'My age of year ***Show the year of newDate*** is or will be ***Show the age variable***'
// 12. Repeat these instructions for 1 billion milliseconds

// ------------------------------------------------


let l = '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~';

let davDOB = new Date(2004, 4, 26);
let question = "Question: What is the date 1 billion seconds from my birthday and how old am I or will be that year?\n";

console.log(l);
console.log(question);
console.log(davDOB);
console.log(`\nMy birth date: ${davDOB} \n[Year: ${davDOB.getFullYear()},`, `Month(index): ${davDOB.getMonth()},`, `Date: ${davDOB.getDate()},`, `Day of Week(index): ${davDOB.getDay()}]\n`);

let breaker = "~~~~~"
console.log(breaker);

let seconds = 1000000000;
let days = seconds / 86400;
let nextDate = new Date(davDOB.getFullYear()+ days, davDOB.getMonth() + days, davDOB.getDate() + days, davDOB.getDay() + days);
let answer = "My birthday in 1 billion seconds would be:\n";
let age = nextDate.getFullYear() - davDOB.getFullYear();

console.log(answer);
console.log(nextDate);
console.log(`\n${nextDate} \n[Year: ${nextDate.getFullYear()},`, `Month(index): ${nextDate.getMonth()},`, `Date: ${nextDate.getDate()},`, `Day of Week(index): ${nextDate.getDay()}]`);
console.log(`\nMy age of ${nextDate.getFullYear()} would be: ${age}`);
console.log(l);







// let newYear = days + davDOB.getFullYear();
// let newMonth = days + davDOB.getMonth();
// let newDate = days + davDOB.getDate();
// let newDay = days + davDOB.getDay();


// let answer = "My birthday in 1 billion seconds would be:"
// let davDOBLater = new Date(newYear, newMonth, newDate, newDay);

// console.log(answer);
// console.log(`\nMy birth date: ${davDOBLater} \n[Year: ${davDOBLater.getFullYear()},`, `Month(index): ${davDOBLater.getMonth()},`, `Date: ${davDOBLater.getDate()},`, `Day of Week(index): ${davDOBLater.getDay()}]`);
// console.log(l);

