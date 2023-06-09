// 1. Create a signup form and display form data in your web
// page on submission.

const form = document.getElementById("signupForm");
const formDataDiv = document.getElementById("formData");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	const name = form.elements["name"].value;
	const email = form.elements["email"].value;
	const password = form.elements["password"].value;

	const formData = `Name: ${name}<br>Email: ${email}<br>Password: ${password}<br><br>`;
	formDataDiv.innerHTML += formData;

	form.reset();
});

// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see
// some details on first look. When user clicks on “Read
// more” button, full detail of that particular item will be
// displayed.

function toggleDetails(button) {
	const item = button.parentNode;
	const fullDetails = item.querySelector(".full-details");

	if (fullDetails.style.display === "none") {
		fullDetails.style.display = "block";
		button.textContent = "Read Less";
	} else {
		fullDetails.style.display = "none";
		button.textContent = "Read More";
	}
}

// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which
// takes student’s details and show each student detail in
// table. Each row of table must contain a delete button and
// an edit button. On click on delete button entire row should
// be deleted. On click on edit button, a hidden form will
// appear with the values of that row.const studentForm = document.getElementById("studentForm");

const studentTable = document.getElementById("studentTable");
const updateForm = document.getElementById("updateForm");
const updateId = document.getElementById("updateId");
const updateName = document.getElementById("updateName");
const updateClass = document.getElementById("updateClass");
let studentData = [];

studentForm.addEventListener("submit", function (event) {
	event.preventDefault();
	const stdntName = document.getElementById("stdntName").value;
	const stdntClass = document.getElementById("stdntClass").value;
	const id = generateId();
	const student = { id, stdntName, stdntClass };
	studentData.push(student);
	displayStudent(student);
	studentForm.reset();
});

function displayStudent({ id, stdntName, stdntClass }) {
	const row = studentTable.insertRow();
	const stdntNameCell = row.insertCell();
	const stdntClassCell = row.insertCell();
	const actionCell = row.insertCell();

	stdntNameCell.textContent = stdntName;
	stdntClassCell.textContent = stdntClass;

	const deleteButton = document.createElement("button");
	deleteButton.textContent = "Delete";
	deleteButton.addEventListener("click", function () {
		deleteStudentRow(row);
	});
	actionCell.appendChild(deleteButton);

	const updateButton = document.createElement("button");
	updateButton.textContent = "Update";
	updateButton.addEventListener("click", function () {
		showUpdateForm(id);
	});
	actionCell.appendChild(updateButton);
}

function deleteStudentRow(row) {
	const rowIndex = row.rowIndex - 1;
	row.remove();
	studentData.splice(rowIndex, 1);
}

function showUpdateForm(id) {
	const student = studentData.find(student => student.id === id);
	if (student) {
		updateId.value = id;
		updateName.value = student.stdntName;
		updateClass.value = student.stdntClass;
		updateForm.classList.remove("hidden-form");
	}
}

function cancelUpdate() {
	updateForm.reset();
	updateForm.classList.add("hidden-form");
}

updateForm.addEventListener("submit", function (event) {
	event.preventDefault();
	const id = updateId.value;
	const stdntName = updateName.value;
	const stdntClass = updateClass.value;

	const studentIndex = studentData.findIndex(student => student.id === id);
	if (studentIndex !== -1) {
		const updatedStudent = { id, stdntName, stdntClass };
		studentData.splice(studentIndex, 1, updatedStudent);

		const row = studentTable.rows[studentIndex + 1];
		row.cells[0].textContent = stdntName;
		row.cells[1].textContent = stdntClass;
	}

	updateForm.reset();
	updateForm.classList.add("hidden-form");
});

function generateId() {
	return "_" + Math.random().toString(36).substr(2, 9);
}
