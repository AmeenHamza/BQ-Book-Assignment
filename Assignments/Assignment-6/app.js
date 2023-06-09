// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

var userInput = +prompt("Enter a number :");
document.write("<h4>Result:</h4>")
document.write("<h4>The value of a is :"+userInput+"</h4>");
document.write("<h4>......................................</h4>")
++userInput;
document.write("<h4>The value of ++a is :"+userInput+"</h4>");
document.write("<h4>Now the value of a is :"+userInput+"</h4>");
userInput++;
document.write("<h4>The value of a++ is :"+userInput+"</h4>");
document.write("<h4>Now the value of a is :"+userInput+"</h4>");
--userInput;
document.write("<h4>The value of --a is :"+userInput+"</h4>");
document.write("<h4>Now the value of a is :"+userInput+"</h4>");
userInput--;
document.write("<h4>The value of a-- is :"+userInput+"</h4>");
document.write("<h4>Now the value of a is :"+userInput+"</h4>");

// 2- What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

document.write("<u><h2>Question 2 :</h2></u>");
var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("<h4>The value of a is :"+a+"</h4>");
document.write("<h4>The value of b is :"+b+"</h4>");
document.write("<h4>The value of result is :"+result+"</h4>");
--a;
document.write("<h4>The value of --a is :"+a+"</h4>");
var result = --a - --b;
document.write("<h4>The value of --a - --b is :"+result+"</h4>");
result = --a - --b + ++b;
document.write("<h4>The value of --a - --b + ++b is :"+result+"</h4>");
result = --a - --b + ++b + b--;
document.write("<h4>The value of --a - --b + ++b + b-- is :"+result+"</h4>");

// 3. Write a program that takes input a name from user & greet the user.

document.write("<u><h2>Question 3 :</h2></u>");
var nam = prompt("Enter your name :");
document.write("<h4>......................................</h4>")
document.write("<h4>Hi! "+nam+"</h4>");

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

document.write("<u><h2>Question 5 :</h2></u>");
var numForTable = +prompt("Enter a number for printing a table :");
if (numForTable) {
    for (var i = 1; i <= 10; i++) {
        document.write("<h4> " + numForTable + " x " + i + " = " + numForTable * i + "</h4>");
 }
}
else {
    var table = 5;
    for (var i = 1; i <= 10; i++) {
        document.write("<h4> " + table + " x " + i + " = " + table * i + "</h4>");
 }
}

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subjectName1 = prompt("Enter first subject name :");
var subjectName2 = prompt("Enter second subject name :");
var subjectName3 = prompt("Enter third subject name :");
var totalMarks = 100;
var sub1Obt = +prompt("Enter first subject obtained marks:");
var sub2Obt = +prompt("Enter second subject obtained marks:");
var sub3Obt = +prompt("Enter third subject obtained marks:");
var allObt = sub1Obt+sub2Obt+sub3Obt;
var total = 300;
var percentage = ((sub1Obt+sub2Obt+sub3Obt)/total) *100;

document.write(
    "<b>Subject</b>" + " " + "<b>Total Marks</b>" + " " + "<b>Obtainded Marks</b>" + " " + "<b>Percentage</b>"+
    "<p>"+subjectName2 + " " + totalMarks + " " + sub2Obt + " " + sub2Obt + "%"+"</p>"+
    "<p>"+subjectName1 + " " + totalMarks + " " + sub1Obt + " " + sub2Obt + "%"+"</p>"+
    +sub3Obt + " " + totalMarks + " " + sub3Obt + " " + sub2Obt + "%"+"</p>"+
    "<p>"+ "  " + "<b>"+total+"</b>" + " " + "<b>"+allObt+"</b>" + " " + "<b>"+percentage+"</b>"+"</p>"+ 
"");