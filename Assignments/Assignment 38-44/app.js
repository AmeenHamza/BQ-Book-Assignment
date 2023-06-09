// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a, b) {
    var result = 1;
    for (var i = 1; i <= b; i++) {
        result *= a;
    }
    return result;
}

var base = 2;
var raisedTo = 3;
var result = power(base, raisedTo);
document.write(result);

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

function isLeap(year) {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

var year = 2020;
var isLeap = isLeap(year);
document.write("<br/>" + isLeap);

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function calc(a, b, c) {
    return (a + b + c) / 2;
}

function calcAreaFromS(s, a, b, c) {
    var term1 = s - a;
    var term2 = s - b;
    var term3 = s - c;
    var area = Math.sqrt(s * term1 * term2 * term3);
    return area;
}

function calcTriArea(a, b, c) {
    var s = calc(a, b, c);
    var area = calcAreaFromS(s, a, b, c);
    return area;
}

var sideA = 3;
var sideB = 4;
var sideC = 5;
var area = calcTriArea(sideA, sideB, sideC);

document.write("<br>");
document.write(area);

// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.

function calcAvg(marks1, marks2, marks3) {
    var totalMarks = marks1 + marks2 + marks3;
    var avg = totalMarks / 3;
    return avg;
}

function calcPercentage(marks1, marks2, marks3) {
    var totalMarks = marks1 + marks2 + marks3;
    var percentage = (totalMarks / 300) * 100;
    return percentage;
}

function mainFunction() {
    var marks1 = 80;
    var marks2 = 85;
    var marks3 = 90;

    var avg = calcAvg(marks1, marks2, marks3);
    var percentage = calcPercentage(marks1, marks2, marks3);

    document.write("Average: " + avg);
    document.write("<br>");
    document.write("Percentage: " + percentage + "%");
}

document.write("<br>");
mainFunction();
document.write("<br>");

// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

function indexOfCharacter(string, character) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] === character) {
            return i;
        }
    }
    return -1; 
}

var text = "Hello, World!";
var index = indexOfCharacter(text, "W");
document.write(index);
document.write("<br/>");

// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.

function removeVowels(inputSentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var sentence = "";
    for (var i = 0; i < inputSentence.length; i++) {
        var char = inputSentence.charAt(i);
        if (!vowels.includes(char)) {
            sentence += char;
        }
    }
    return sentence;
}

var sentence = "This is a sample sentence";
var updatedSentence = removeVowels(sentence);
document.write(updatedSentence);

// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.

function countSuccessiveVowels(text) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for (var i = 0; i < text.length - 1; i++) {
        var currentChar = text[i].toLowerCase();
        var nextChar = text[i + 1].toLowerCase();
        if (vowels.includes(currentChar) && vowels.includes(nextChar)) {
            count++;
        }
    }
    return count;
}

var sentence = "Pleases read this application and give me gratuity";
var count = countSuccessiveVowels(sentence);
document.write("<br/>");
document.write("Occurrences of three vowels in succession: " + count);
document.write("<br/>");

// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters

function convertKmToMeters(km) {
    return km * 1000;
}

function convertKmToFeet(km) {
    return km * 3280.84;
}

function convertKmToInches(km) {
    return km * 39370.08;
}

function convertKmToCentimeters(km) {
    return km * 100000;
}

var distanceInKm = 10;
var distanceInMeters = convertKmToMeters(distanceInKm);
var distanceInFeet = convertKmToFeet(distanceInKm);
var distanceInInches = convertKmToInches(distanceInKm);
var distanceInCentimeters = convertKmToCentimeters(distanceInKm);

document.write("Distance in meters: " + distanceInMeters);
document.write("<br/>");
document.write("Distance in feet: " + distanceInFeet);
document.write("<br/>");
document.write("Distance in inches: " + distanceInInches);
document.write("<br/>");
document.write("Distance in centimeters: " + distanceInCentimeters);
document.write("<br/>");

// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour

function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12.00;
    var overtimePay = 0;

    if (hoursWorked > regularHours) {
        var overtimeHours = hoursWorked - regularHours;
        overtimePay = overtimeHours * overtimeRate;
    }

    return overtimePay;
}

var hoursWorked = 45;
var overtimePay = calculateOvertimePay(hoursWorked);
document.write("The overtime pay: Rs. " + overtimePay);
document.write("<br/>");

// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.

function calculateCurrencyNotes(amount) {
    var hundreds = Math.floor(amount / 100);
    amount %= 100;
    var fifties = Math.floor(amount / 50);
    amount %= 50;
    var tens = Math.floor(amount / 10);

    return {
        hundreds: hundreds,
        fifties: fifties,
        tens: tens
    };
}

var withdrawalAmount = parseInt(prompt("Enter amount to withdraw in hundreds:"));

var notes = calculateCurrencyNotes(withdrawalAmount);

document.write("You will have " + notes.hundreds + " hundred notes, " + notes.fifties + " fifty notes, " + notes.tens + " ten notes.");
