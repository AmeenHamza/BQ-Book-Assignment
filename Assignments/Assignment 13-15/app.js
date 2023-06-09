// 1- Declare an empty array using JS literal notation to store student names in future

var studentNames = [];

studentNames.push("Abdullah");
studentNames.push("Ahmed");
studentNames.push("Hamza");

console.log(studentNames);

// 2- Declare an empty array using JS object notation to store student names in future.

var student = {
    names: []
}

student.names.push("Abdullah");
student.names.push("Ahmed");
student.names.push("Ameen");
console.log(student.names);

// 3. Declare and initialize a strings array.

var strArr = ["red", "yellow", "black"];
console.log(strArr);

// 4. Declare and initialize a numbers array.

var numArr = [1, 2, 3, 4];
console.log(numArr);

// 5. Declare and initialize a boolean array.

var boolArr = [true, false];
console.log(boolArr);

// 6. Declare and initialize a mixed array.

var mixArr = [1, 2, "Hi", true];
console.log(mixArr);

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser.

document.write("<h3>Qualifications:</h3>");
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
for (let index = 1; index < qualifications.length; index++) {
    const element = qualifications[index];
    document.write("<h4>" + index + " ) " + element + "</h4>");
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students

var nameStudents = ["Ameen", "Hamza", "Siddique"];
var scoreStudents = [45, 78, 96];
var percentages = [];
var result;
var total = 500;

for (let i = 0; i < 3; i++) {
    result = (scoreStudents[i] / total) * 100;
    percentages.push(result);
}

for (let i = 0; i < 3; i++) {
    document.write("<p>Score of " + nameStudents[i] + " is " + scoreStudents[i] + ". Percentage: " + percentages[i] + "%</p>")
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.

var colorNames = ["Red","Yellow","Green"];
document.write("<p>"+colorNames+"</p>");
var userChoice = prompt("Enter your favourite color for adding at the beginning of the color Names");
colorNames.unshift(userChoice);
document.write("<p>"+colorNames+"</p>");
var userChoice1 = prompt("Enter your favourite color for adding at the end of the color Names");
colorNames.push(userChoice1);
document.write("<p>"+colorNames+"</p>");
colorNames.unshift("Cyan","Light blue");
document.write("<p>"+colorNames+"</p>");
colorNames.shift();
document.write("<p>"+colorNames+"</p>");
colorNames.pop();
document.write("<p>"+colorNames+"</p>");
var userChoice2 = parseInt(prompt("Enter destination where you want to add favourite color"));
var userChoice3 = prompt("Enter color name");
colorNames.splice(userChoice2,0,userChoice3);
document.write("<p>"+colorNames+"</p>");
var userChoice4 = +prompt("Enter destination where you want to delete favourite color");
var userChoice5 = +prompt("Enter how many values are delete");
colorNames.splice(userChoice4,userChoice5);
document.write("<p>"+colorNames+"</p>");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

var studentsScore = [320, 230, 480, 120];
console.log("Unordered Array :" + studentsScore);
var scoreInOrder = studentsScore.sort();
console.log("Sorted Array " + scoreInOrder);

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cityNames.slice(0, 3);
console.log("Cities List :\n" + cityNames);
console.log("Selected Cities List:\n" + selectedCities);


// 12. Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
var joinArr = arr.join(" ");
console.log("Array :\n" + arr);
console.log("String :\n" + joinArr);

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

var fifoArr = [];
fifoArr.push("Mouse");
fifoArr.push("Keyboard");
fifoArr.push("Printer");
fifoArr.push("Monitor");

console.log("Devices:\n" + fifoArr);

var length = fifoArr.length;
for (var index = 0; index < length; index++) {
    const element = fifoArr.shift();
    console.log("Out:\n" + element);
}

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

var fifoArr = [];
fifoArr.push("Mouse");
fifoArr.push("Keyboard");
fifoArr.push("Printer");
fifoArr.push("Monitor");

console.log("Reverse Devices:\n" + fifoArr);

var length = fifoArr.length;
for (var index = 0; index < length; index++) {
    const element = fifoArr.pop();
    console.log("Out:\n" + element);
}


// Question no -15 (Dropdown)

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

function dropdown() {
    document.write('<select name="drop" id="drop">');

    for (var i = 0; i < manufacturers.length; i++) {
        document.write("<option value='"+manufacturers[i]+"'>" + manufacturers[i]+"</option>");
    }

    document.write('</select>');
}

dropdown();
