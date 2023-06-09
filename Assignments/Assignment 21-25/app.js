// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name

var firstName = prompt("Enter your first name :");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
document.write("<p>Hi "+fullName+"</p>");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

var userModel = prompt("What is your favorite mobile phone model:");

document.write("<p>My favorite phone is :"+userModel+"\nLenght of string:"+userModel.length+"</p>");

// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

var indexOfStr = "Pakistani";

console.log(`The index of ${indexOfStr} is ${indexOfStr.indexOf("n")}`);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

var lastIndex = "Hello World";

console.log(`String ${lastIndex}
Last index of 'l' is ${lastIndex.lastIndexOf("l")}`);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

console.log(`String ${indexOfStr}
Character at index 3 is ${indexOfStr.charAt(3)}`);

// 6. Repeat Q1 using string concat() method.

var firstName = prompt("Enter your first name :");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" "+lastName);
document.write("<p>Hi "+fullName+"</p>");


// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

var city = "Hyderabad";
console.log(`City ${city}
After replacement ${city.replace("Hyder","Islam")}`);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
var message = "Ali and Sami are best friends. They play cricket and football together.";
console.log(`String ${message}
After replacement ${message.replace(/and/g, "&")}`);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var str = "472";
console.log(`Value ${str}
Type: ${typeof(str)}`);
var inNum = parseInt(str);
console.log(`Value ${str}
Type: ${typeof(inNum)}`);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

var userInput = prompt("Enter any string:");
console.log(`User Input ${userInput}
Upper case: ${userInput.toUpperCase()}`);

// 11. Write a program that takes user input. Convert and
// show the input in title case.

var user1 = prompt("Enter any string :");
var first = user1.charAt(0).toUpperCase();
var second = user1.slice(1,user1.length);
console.log(`User input ${user1}
Title case: ${first+second}`);

// 12. Write a program that converts the variable num to
// string.
// Remove the dot to display “3536” display in your browser.

var num = 35.36 ;
var numString = num.toString();
var str1 = "";

for (let index = 0; index < numString.length; index++) {
    if (numString[index] === '.') {
        continue;
    }
    else {
        str1 += numString[index];
    }
}
console.log(`Number ${num}
Result ${str1}`);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

var username = prompt("Enter username");

for (let i=0; i<username.length; i++) {
    if (username[i] === "@" || username[i] === "." || username[i] === "," || username[i] === "!") {
        alert("Please enter a valid username!");
        break;
    }
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

A = ["cake","apple pie","cookie","chips","patties"];

var userSearch = prompt("Welcome to ABC bakery what do you want to order sir/ma'am?");
var check = false;

for (var index = 0; index < A.length; index++) {
    if (A[index] === userSearch) {
        check = true;
        break;
    }
}

if (check) {
    console.log(`${userSearch} is available at index ${index} in our bakery`);
}
else {
    console.log(`We are sorry ${userSearch} is not available in our bakery`);
}

// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var enterPassword = prompt("Enter a password").toLowerCase();
console.log(`Enter password: ${enterPassword}`);
function isNumber(char) {
    var charCode = char.charCodeAt(0);
    return charCode >= 48 && charCode <= 57;
}

function isLetter(char) {
    var charCode = char.charCodeAt(0);
    return charCode >= 97 && charCode <= 122;
}

if (isNumber(enterPassword.charAt(0))) {
    console.log("Password cannot start with a number.");
}
else if (enterPassword.length < 6) {
    console.log("Password must be at least 6 characters long.");
}
else {
    var ifNumber = false;
    var ifLetter = false;

    for (var i = 0; i < enterPassword.length; i++) {
        var char = enterPassword.charAt(i);

        if (isNumber(char)) {
            ifNumber = true;
        }
        else if (isLetter(char)) {
            ifLetter = true;
        }
    }

    if (ifNumber && ifLetter) {
        console.log("Your password is valid.");
    }
    else {
        console.log("Please enter a valid password that contains both alphabets and numbers.");
    }
}

// 16. Write a program to convert the following string to an array using string split method.
// Display the elements of array in your browser.

var university = "University of Karachi";
var splitArr = university.split("");
var arr = [];
arr.push(splitArr);
console.log(`This is split array ${arr} ${typeof(arr)}`);

arr.forEach(element => {
   console.log(element); 
});

// 7. Write a program to display the last character of a user
// input.

var lastChar = prompt("Enter any string");

console.log(`User input ${lastChar}
Last character of user input: ${lastChar.charAt(lastChar.length-1)}`);

// 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to  number of occurrences of word “the” in given string.

var stringCheck = "The quick brown fox jumps over the lazy dog".toLowerCase();
var count = 0;
var splitString = stringCheck.split(" ");
for(let i=0; i<splitString.length; i++) {
    if (splitString[i] === "the") {
        count++;
    }
}
console.log(`There are ${count} occurrence(s) of word 'the'`);