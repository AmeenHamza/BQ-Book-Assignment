// 1. Write a program that displays current date and time in your browser.

var date = new Date();
console.log(date);

// 2. Write a program that alerts the current month in words. For example December.

var currentMonth = date.getMonth();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
alert("Current month is: " + months[currentMonth]);

// . Write a program that alerts the first 3 letters of the currentday, for example if today is Sunday then alert will show Sun.

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDay = date.getDay();
var dayCurrent = days[currentDay];
var first3 = dayCurrent.slice(0, 3);
console.log(`Today is ${first3}`);

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var dayCurrent = days[currentDay];
if (dayCurrent === "Saturday" || dayCurrent === "Sunday") {
    console.log("It's a Fun day");
}
else {
    console.log("It's not a Fun day");
}

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16 th of the month else shows “Last days of the month”.

var getDate = date.getDate();
if (getDate < 16) {
    console.log("First fifteen days of the month");
}
else {
    console.log("Last days of the month");
}

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

var currentDate = new Date();
var dateSInce = new Date("Jan 1, 1970");
var minutesSince1970 = Math.floor(currentDate.getTime() - dateSInce.getTime());
var inMinutes = (minutesSince1970 / 1000) * 60;
console.log("Minutes since Jan 1, 1970:", inMinutes);

// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

var currentHour = date.getHours();

if (currentHour < 12) {
    alert("It's AM");
}
else {
    alert("It's PM");
}

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.
                    //   Year, month, date
var laterDate = new Date(2020, 11, 31);
console.log("Later Date:", laterDate);

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1 st Ramadan?
// Note: 1 st Ramadan was on June 18, 2015

var currentDate = new Date();
var ramadanDate = new Date(2015, 5, 18);  // The month index is 5 because in javascript months index starts from 0 

var passedDays = currentDate.getTime() - ramadanDate.getTime(); 
var result = Math.floor(passedDays / (1000 * 60 * 60 * 24)); 

alert(`${result} days have passed since 1st Ramadan, 2015`);

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

var beginningDate = new Date(2015, 0, 1);
var referenceDate = new Date(2015, 11, 5);

var elapsedMilliseconds = referenceDate - beginningDate;
var secondsElapsed = Math.floor(elapsedMilliseconds/1000);
alert(`On reference date ${referenceDate},
${secondsElapsed} had passed since beginning of 2015`);

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var currentNewDate = new Date();
var extractHours = date.setHours(date.getHours() -1 );
console.log(`Current date: ${currentNewDate}
1 hour ago: ${date}`);

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

var hundredYears = currentDate.setFullYear(currentDate.getFullYear() -100 );
var date1 = new Date();
console.log(`Current date: ${date1}
100 years ago: ${currentDate}`);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var userAge = parseInt(prompt("Enter your age:"));
var currentYear = date1.getFullYear();
var calculateBirthYear = currentYear - userAge;
console.log(calculateBirthYear);

// 14. Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var customerName = prompt("Enter your name:");
var userUnits = +prompt("Enter your K.E bill units:");
var currentUserMonth = months[currentMonth];
var chargesPerUnit = 16;
var latePayment = 350;
var netAmount = userUnits * chargesPerUnit;
var afterDueDate = netAmount + latePayment;

alert(`K-Electric Bill
Customer Name: ${customerName}
Month: ${currentUserMonth}
Number of units: ${userUnits}
Charges per unit: ${chargesPerUnit}

Net amount payable (within due date): ${netAmount}
Late amount surcharge: ${latePayment}
Gross amount payable (after due date): ${afterDueDate}`);