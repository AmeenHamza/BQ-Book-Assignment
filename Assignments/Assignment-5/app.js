// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser

var num1 = +prompt("Enter first number :");
var num2 = +prompt("Enter second number :");

var addNum = num1 + num2;
document.write("<h4>Sum of " + num1 + " and " + num2 + " is " + addNum + "</h4>");

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

var subNum = num1 - num2;
document.write("<h4>Substration of " + num1 + " and " + num2 + " is " + subNum + "</h4>");
var mulNum = num1 * num2;
document.write("<h4>Multiplication of " + num1 + " and " + num2 + " is " + mulNum + "</h4>");
var divNum = num1 / num2;
document.write("<h4>Division of " + num1 + " and " + num2 + " is " + divNum + "</h4>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.


var three;
document.write("<h5>Value after variable declaration is:" + three + "</h5>");

var someValue = 8;
document.write("<h5>Initial value:" + someValue + "</h5>");
someValue++;
document.write("<h5>Value after increment is :" + someValue + "</h5>");
someValue += 7;
document.write("<h5>Value After addition is :" + someValue + "</h5>");
someValue--;
document.write("<h5>Value after decrement is :" + someValue + "</h5>");
document.write("<h5>The remainder is :" + someValue % 3 + "</h5>");


// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie

var ticket = 600;
var fiveTickets = ticket * 5;
document.write("<h3>Total cost of 5 tickets is: " + fiveTickets + " PKR</h3>");


// 5. Write a script to display multiplication table of any number in your browser.

var table = 5;
for (var i = 1; i <= 10; i++) {
    document.write("<h4> " + table + " x " + i + " = " + table * i + "</h4>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”

var celcius = 25;
var celToFer = (celcius * (9 / 5)) + 32
document.write("<h2> " + celcius + " <sup>0</sup>C is " + celToFer + " <sup>0</sup>F </h2>");

var fahrenheit = 70;
var ferToCel = (fahrenheit - 32) * (5 / 9)
document.write("<h2> " + fahrenheit + " <sup>0</sup>F is " + ferToCel + " <sup>0</sup>C </h2>");


// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges

var item1Price = 650;
var item2Price = 100;
var item1Quantity = 3;
var item2Quantity = 7;
var shippingCharges = 100;

var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
document.write("<h4>Price of item 1 is: " + item1Price + "</h4>");
document.write("<h4>Quantity of item 1 is: " + item1Quantity + "</h4>");
document.write("<h4>Price of item 1 is: " + item2Price + "</h4>");
document.write("<h4>Quantity of item 2 is: " + item2Quantity + "</h4>");
document.write("<h4>Shipping Charges : " + shippingCharges + "</h4>");
document.write("<h4>Total Cost is :" + totalCost + "</h4>");

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h3>Total marks is :" + totalMarks + "</h3>");
document.write("<h3>Obtained marks is :" + obtainedMarks + "</h3>");
document.write("<h3>Percentage : " + percentage + "%</h3>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals.Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

var usAndSaudi = (104.80*10) + (28*25);
document.write("<h2>Total currency in PKR is : " + usAndSaudi + "</h2>");

// 10- Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var numFor10 = 10;
var inOneEx = ((numFor10 + 5)*10)/2;
document.write("<h5>Final result  is : " + inOneEx + "</h5>");

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values

var date = new Date();
var currentYear = date.getFullYear();
var userBirthYear = +prompt("Enter your birth year :");
var age = currentYear - userBirthYear;
document.write("<h2>Current year : " + currentYear + "</h2>");
document.write("<h2>Birth year : " + userBirthYear + "</h2>");
document.write("<h2>Your age is : " + age + "</h2>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * Math.pow(radius,2);

document.write("<h2>Radius of a circle : " + radius + "</h2>");
document.write("<h2>The circumference is : " + circumference + "</h2>");
document.write("<h2>The area is : " + area + "</h2>");

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN

var snack = "Chocolate Sooper";
var current = 19;
var maxAge = 65;
var estimatedEatPerDay = 3;
var totalEatTillLIfe = (maxAge - current) * estimatedEatPerDay;

document.write("<h1>Favourite Snack : " + snack + "</h1>");
document.write("<h2>Current age : " + current + "</h2>");
document.write("<h2>Estimated maximum age is : " + maxAge + "</h2>");
document.write("<h2>Amount of snacks per day : " + estimatedEatPerDay + "</h2>");
document.write("<h3>You will need " + totalEatTillLIfe + " to last you until the ripe old age of  "+maxAge+"</h3>");
