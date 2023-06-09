// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var takePositiveInteger = +prompt("Enter positive integer");
var roundOffValue = Math.round(takePositiveInteger);
var floorValue = Math.floor(takePositiveInteger);
var ceilValue = Math.ceil(takePositiveInteger);

console.log(`Number ${takePositiveInteger}
round off value: ${roundOffValue}
floor value: ${floorValue}
ceil value: ${ceilValue}`);

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var takeNegativeFloat = +prompt("Enter Negative floating number");
var roundOffValue1 = Math.round(takeNegativeFloat);
var floorValue1 = Math.floor(takeNegativeFloat);
var ceilValue1 = Math.ceil(takeNegativeFloat);

console.log(`Number ${takeNegativeFloat}
round off value: ${roundOffValue1}
floor value: ${floorValue1}
ceil value: ${ceilValue1}`);

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var number = -4;
console.log(`The absolute value of ${number} is ${Math.abs(number)}`);

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

var randomDice = Math.floor(Math.random() * 6) + 1;
console.log(`Random dice value ${randomDice}`);

// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

var randomCoinValue = Math.floor(Math.random() * 2) + 1;
if (randomCoinValue === 1) {
    console.log(`${randomCoinValue}
    Random coin value: Tails`); 
}
else {
    console.log(`${randomCoinValue}
    Random coin value: Heads`);
}

// 6. Write a program that shows a random number between 1 and 100 in your browser.

var random1to100 = Math.floor(Math.random() * 100) + 1;
console.log(`Random number between 1 and 100: ${random1to100}`);

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

var userWeight = parseFloat(prompt("Enter your weight in kilograms:"));

console.log(`The weight of user is ${userWeight} kilograms`);

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

var random1to10 = Math.floor(Math.random() * 10) + 1;
var userRandom = +prompt("Enter a number a between 1 and 10");

(userRandom === random1to10 ? console.log(`Congratulation`) : console.log(`Try again`));