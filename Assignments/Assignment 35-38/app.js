// 1. Write a function that displays current date & time in your
// browser.

function currentTime() {
    var date = new Date();

    document.write(date);
}

currentTime();

// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    var greeting = "Hello, " + fullName + "! Welcome!";
    alert(greeting);
    document.write("<br>"+greeting);
}
greetUser(prompt("Enter your first name:"), prompt("Enter your last name:"));

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

function add2Nos(Num1, Num2) {
    if (isNaN(Num1 && Num2) || Num1 && Num2 === null || Num1 && Num2 === "") {
        var Num1 = parseFloat(prompt("Enter the first num: "));
        var Num2 = parseFloat(prompt("Enter the second num: "));
    }
    var sum = Num1 + Num2;
    return sum;
}
var result = add2Nos();

alert("The sum of the two numbers is: " + result);
document.write("<br/>The sum of the two numbers is: " + result);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

function calculator(num1, num2, operator) {
    var result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            return "Please choose correct operation";
    }

    return result;
}
var result = calculator(prompt("Enter Number 1: "), prompt("Enter Number 2: "), prompt("Enter Operator: "));
document.write("<br/>The result is: " + result);

// 5. Write a function that squares its argument.

function square(num) {
    return num * num;
}

var num = 5;
var result = square(num);
document.write(result);

// 6. Write a function that computes factorial of a number.

function Factorial(n) {
    var n = parseInt(n);
    var factorial = 1;

    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }

    document.write("<br/>The factorial of " + n + " is: " + factorial);
}

Factorial(prompt("Enter a positive integer:"));


// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

function count(start, end) {
    for (var i = start; i <= end; i++) {
        document.write("<br/>" + i);
    }
}

count(prompt("Start Count From:"), prompt("Count Till:"));

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotenuse(base, normal) {
    function calculateSquare(no) {
        return no * no;
    }

    var baseSquare = calculateSquare(base);
    var normalSquare = calculateSquare(normal);
    var hypSquare = baseSquare + normalSquare;
    var hyp = Math.sqrt(hypSquare);

    return hyp;
}

var base = 3;
var normal = 4;
var result = calculateHypotenuse(base, normal);
document.write("<br/>Hypotenuse is: " + result);

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// area calculation function

function area(width, height) {
    return width * height;
}

var result = area(5, 3);
document.write("<br/> Arguments as value: ");
document.write(result);
var width = 5;
var height = 3;
var result = area(width, height);
document.write("<br/> Arguments as variables: ");
document.write(result);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam

function isPalindrome(str) {
    var reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
}

var string = "madam";
var result = isPalindrome(string);
document.write("<br/>");
document.write(result);

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function upperCaseChar(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        var firstLetter = words[i][0].toUpperCase();
        words[i] = firstLetter + words[i].slice(1)
    }
    return words.join(" ");
}

var string = "the Quick brown fox";
var result = upperCaseChar(string);
document.write("<br/>" + result);

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function longestWord(str) {
    var words = str.split(" ");
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}

var string = "Web Development Tutorial";
var result = longestWord(string);
document.write("<br/>" + result);

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function countOccurrences(str, letter) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    return count;
}

var string = "JSResourceS.com";
var letter = "o";
var result = countOccurrences(string, letter);
document.write("<br/>" + result);

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2
// calculate circumference of circle

function Circumference(radius) {
    var circumference = 2 * Math.PI * radius;
    document.write("<br/>The circumference is: " + circumference);
}

function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    document.write("<br/>The area is: " + area);
}

var radius = 5;
Circumference(radius);
calcArea(radius);
document.write("<br>");


