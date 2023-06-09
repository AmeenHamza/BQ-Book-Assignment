// 1. Consider you have following code snippet:
// (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i. Get element of id “main-content” and assign them in a variable.
// ii. Display all child elements of “main-content” element.
// iii. Get all elements of class “render” and show their innerHTML
// in browser.
// iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.

const mainContent = document.getElementById("main-content");
document.write("<br/>");
document.write(mainContent.children);
document.write("<br/>");
const renderElements = document.getElementsByClassName("render");
for (let i = 0; i < renderElements.length; i++) {
    document.write(renderElements[i].innerHTML);
}
document.write("<br/>");
const firstName = document.getElementById("first-name");
firstName.value = "Ameen";
document.write("<br/>");
const lastName = document.getElementById("last-name");
lastName.value = "Hamza";
document.write("<br/>");
const email = document.getElementById("email");
email.value = "myemail@gmail.com";
document.write("<br/>");

// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”


const formNode = document.getElementById("form-content");
document.write("What is node type of element having id “form-content”?: " + formNode.nodeType);
document.write("<br/>");
const lastNode = document.getElementById("lastName");
document.write("Show node type of element having id “lastName” and its child node.: " + lastNode.nodeType + ", " + lastNode.childNodes[0].nodeType);
document.write("<br/>");
lastNode.childNodes[0].nodeValue = "Last Name: Smith";
document.write("<br/>");
const mainElement = document.getElementById("main-content");
const firstChild = mainElement.firstChild;
const lastChild = mainElement.lastChild;
document.write("Get First and last child of id “main-content”.:" + firstChild + ", " + lastChild)
document.write("<br/>");
const lastElement = document.getElementById("lastName");
const nextSibling = lastElement.nextSibling;
const previousSibling = lastElement.previousSibling;
document.write("Get next and previous siblings of id “lastName”.:" + nextSibling + ", " + previousSibling);
document.write("<br/>");
const emailElement = document.getElementById("email");
const parentNode = emailElement.parentNode;
document.write("Get parent node and node type of element having id “email”.:" + parentNode + ", " + emailElement.nodeType);
document.write("<br/>");