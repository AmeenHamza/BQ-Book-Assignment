// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

var userCity = prompt("Enter your city name :");
document.write("<p>Welcome to city of lights</p>");

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am

var gender = prompt("Choose a gender :").toLowerCase();
if (gender === "male") {
    document.write("Good Morning Sir");
}
else {
    document.write("Good Morning Ma'am");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
// Signal color Message
// Red Must Stop
// Yellow Ready to move
// Green Move now

var colorSignal = prompt("Enter color of signal at that time:").toLowerCase();
switch (colorSignal) {
    case "red": document.write("<p>Must Stop.</p>");
        break;
    case "yellow": document.write("<p>Ready to move.</p>");
        break;
    case "green": document.write("<p>Move now.</p>");
        break;
    default:
        document.write("<p>Please enter a correct color.</p>");
}

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

var fuelRemaining = +prompt("Enter the remaining fuel in your car in litres.");
if (fuelRemaining < 0.25) {
    document.write("<p>Please refill the fuel in your car.</p>");
}
else {
    document.write("<p>Speed Up!.</p>");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e. 
if (true){
    alert("True");
}
if (false){
alert("False");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade.

var obtained = +prompt("Enter obtained marks :");
var totalmarks = +prompt("Enter total marks :");
var Percentage = (obtained/totalmarks)*100;
var grade;
var remarks;
if (Percentage >=80 && Percentage <=100) {
    grade = "A-one";
    remarks = "Excellent";
}
else if (Percentage >=70 && Percentage <80) {
    grade = "A";
    remarks = "Good";
}
else if (Percentage >=60 && Percentage <70) {
    grade = "B";
    remarks = "You need to improve";
}
else if (Percentage >=50 && Percentage <60) {
    grade = "Fail";
    remarks = "Sorry";
}
else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h2>Marks Sheet</h2>");
document.write("<p>Total marks :"+totalmarks+"</p>");
document.write("<p>Marks obtained :"+obtained+"</p>");
document.write("<p>Percentage :"+Percentage+"%</p>");
document.write("<p>Grade :"+grade+"</p>");
document.write("<p>Remarks :"+remarks+"</p>");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var guess = 7;
var userGuess = +prompt("Guess the number :");

if (userGuess > guess || userGuess < guess) {
    document.write("<p>Close enough to the correct answer</p>");
}
else if (userGuess === guess) {
    document.write("<p>Bingo! Correct answer</p>");
}
else {
    document.write("<p>Please enter a correct number.</p>");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var user = +prompt("Enter a number :");
if (user % 3 === 0) {
    document.write("<p>Yes! this number is divisible by 3.</p>");
}
else {
    document.write("<p>Sorry! this number is not divisible by 3.</p>");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

if (user % 2===0) {
    document.write("<p>Yes! this number is even.</p>");
}
else {
    document.write("<p>Yes! this number is odd.</p>");
}

// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = +prompt("Enter temperature in o C");
if (temperature > 40 && temperature < 50) {
    document.write("<p>It is too hot outside.</p>");
}
else if (temperature > 30 && temperature < 40) {
    document.write("<p>The Weather today is Normal.</p>");
}
else if (temperature > 20 && temperature < 30) {
    document.write("<p>Today’s Weather is cool.</p>");
}
else if (temperature > 10 && temperature <20) {
    document.write("<p>OMG! Today’s weather is so Cool.</p>");
}
else {
    document.write("<p>Please enter temperature in Degree Centigrade.</p>");
}

// 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNumber = +prompt("Enter first number :");
var secondNumber = +prompt("Enter second number :");
var operator = prompt("Please choose a operator +, -, *, /, %");
var resultCal;

if (operator === "+") {
    resultCal = firstNumber + secondNumber;
}
else if (operator === "-") {
    resultCal = firstNumber - secondNumber;
}
else if (operator === "*") {
    resultCal = firstNumber * secondNumber;
}
else if (operator === "/") {
    resultCal = firstNumber / secondNumber;
}
else if (operator === "%") {
    resultCal = firstNumber % secondNumber;
}
else {
    document.write("<h3>Please choose a correct operator.</h3>");
}
document.write("<p>Result : "+resultCal+"</p>");