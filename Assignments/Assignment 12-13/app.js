var char = prompt("Enter any number string or letter (Upper case or lower case)");

// Convert the following code into ascii code
var asciCode = char.charCodeAt(0);
console.log(asciCode);
if (asciCode >= 48 && asciCode <= 57) {
    document.write("<p>The given input is a number.</p>");
}
else if (asciCode >= 65 && asciCode <= 90) {
    document.write("<p>The given input is a upper case letter.</p>");
}
else if (asciCode >= 97 && asciCode <= 122) {
    document.write("<p>The given input is a lower case letter.</p>");
}
else {
    document.write("<p>The given input is not a number, lower case letter, upper case letter.</p>");
}

// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");

if (num1 > num2) {
    document.write("<p>Number 1 is greater.</p>");
}
else if(num1 === num2) {
    document.write("<p>Both are equal.</p>");
}
else {
    document.write("<p>Number 2 is greater.</p>");
}


// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

var enterNum = +prompt("Enter any number:");

if (enterNum > 0) {
    document.write("<p>The given number is positive.</p>");
}
else if (enterNum < 0) {
    document.write("<p>The given number is negative.</p>");
}
else {
    document.write("<p>The given number is zero.</p>");
}

// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

var enterChar = prompt("Enter a character:");
var char1 = enterChar.charAt(0).toLowerCase();

switch (char1) {
    case "a": document.write("<p>The given character is vowel.</p>");
        break;
    case "e": document.write("<p>The given character is vowel.</p>");
        break;
    case "i": document.write("<p>The given character is vowel.</p>");
        break;
    case "o": document.write("<p>The given character is vowel.</p>");
        break;
    case "u": document.write("<p>The given character is vowel.</p>");
        break;
    default:
        document.write("<p>The given character is not a vowel.</p>");
}


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var newPass = prompt("Please enter a strong password.");
var confirmPass = prompt("Enter your password.");

if (confirmPass) {
    if (confirmPass === newPass) {
        document.write("<p>Correct! The password you entered matches the original password.</p>");
    }
    else {
        document.write("<p>Incorrect password.</p>");
    }
}
else {
    document.write("<p>Please enter your password.</p>");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}
document.write("<p>"+greeting+"</p>");

// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements.

var time = prompt("Enter the time in 24-hour clock format (e.g., 1900):");

// Extracting hours and minutes from the time that is enter by the user;

var formatTime = parseInt(time.substring(0,4));
// var minutes = parseInt(time.substring(2,4));

if (formatTime >= '0000' && formatTime < 1200){
    document.write("<h2>Good morning!</h2>");
}
else if (formatTime >=1200 && formatTime < 1700){
    document.write("<h2>Good afternoon!</h2>");
}
else if (formatTime >=1700 && formatTime < 2100){
    document.write("<h2>Good evening!</h2>");
}
else if (formatTime >=2100 && formatTime < 2359){
    document.write("<h2>Good night!</h2>");
}
else {
    document.write("<h2>Please enter a time in given format!</h2>");
}