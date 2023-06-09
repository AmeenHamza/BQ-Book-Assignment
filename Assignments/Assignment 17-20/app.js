// 1. Declare and initialize an empty multidimensional array. (Array of arrays)

var multi = [[],[],[]];

// 2. Declare and initialize a multidimensional array representing the following matrix:

var multiValues = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];

for (let row = 0; row < multiValues.length; row++) {
    var form = "";
    for (let column = 0; column < multiValues[row].length; column++) {
        form+=multiValues[row][column]+" ";
    }
    console.log(form);
}

// 3. Write a program to print numeric counting from 1 to 10.

for (let index = 1; index <= 10; index++) {
    console.log(index);    
}

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

var table = parseInt(prompt("Enter number for printing multiplication table:"))
var tableLength = parseInt(prompt("Enter length for printing multiplication table:"))

document.write("<p>Multipication table of "+table+" length "+tableLength+"</p>");
for (let i = 1; i <=tableLength; i++) {
    document.write("<p>"+table+" x "+i+" = "+table*i+"</p>");    
}

// 5. Write a program to print items of the following array using for loop:
fruits = ["apple", "banana", "mango", "orange","strawberry"];
for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];    
    document.write("<p>"+element+"</p>");    
}

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];    
    document.write("<p>Element at index "+index+" is "+element+"</p>");    
}

// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

console.log("Counting:");
for (var i = 1; i <= 15; i++) {
  console.log(i);
}

console.log("Reverse counting:");
for (var j = 10; j >= 1; j--) {
  console.log(j);
}

console.log("Even:");
for (var k = 0; k <= 20; k += 2) {
  console.log(i);
}

console.log("Odd:");
for (var l = 1; l <= 19; l += 2) {
  console.log(l);
}

console.log("Series:");
for (var m = 2; m <= 20; m += 2) {
  console.log(m + "k");
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("Welcome to ABC bakery. What do you want to order?");
var found = false;
for(var i=0; i < A.length; i++) {
    if (A[i] === userSearch) {
        found = true;
        break;
    }
}

if (found) {
    document.write("<p>"+userSearch+" is available at index "+i+" in our bakery.</p>");
}
else {
    document.write("<p>We are sorry "+userSearch+" in not available in our bakery.</p>");
}

// 8. Write a program to identify the largest number in the given array.

Arr = [24, 53, 78, 91, 12];
Arr.sort();
console.log("Array items :\n"+Arr);
console.log("The largest number is :"+Arr[Arr.length-1]);

// 9. Write a program to identify the smallest number in the
// given array.
smallArr = [24, 53, 78, 91, 12];
smallArr.sort();
console.log("Array items :\n"+Arr);
console.log("The smallest number is :"+Arr[0]);

// 10. Write a program to print multiples of 5 ranging 1 to 100.

var gap = "";
var rang = 5;
for (let multiple = 1; multiple <= 100; multiple++) {
    if (multiple % 5 === 0) {
        gap+= multiple+",";
    }
}
console.log(gap);