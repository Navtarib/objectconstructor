var Fname = document.getElementById("name");
var rollNo = document.getElementById("rollno");
var age = document.getElementById("age");
var submit = document.getElementById("btn");
var tableBody = document.getElementById("tableBody");

// Load data from localStorage when the page loads
let studentsDatabase = JSON.parse(localStorage.getItem("studentsDatabase")) || [];

// Function to add a new student to the database
function addStudent(name, rollNo, age) {
    const student = { name, rollNo, age };
    studentsDatabase.push(student);

    // Save the updated database to localStorage
    localStorage.setItem("studentsDatabase", JSON.stringify(studentsDatabase));

    // Update the table with the new student
    appendToTable(student);
}

// Function to append a student to the table
function appendToTable(student) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.rollNo}</td>
        <td>${student.age}</td>
    `;

    tableBody.appendChild(row);
}

// Populate the table with existing data from localStorage
function loadStudents() {
    studentsDatabase.forEach((student) => {
        appendToTable(student);
    });
}

// Submit button event listener
submit.addEventListener("click", function () {
    if (Fname.value && rollNo.value && age.value) {
        addStudent(Fname.value, rollNo.value, age.value);

        // Clear input fields
        Fname.value = "";
        rollNo.value = "";
        age.value = "";
    } else {
        alert("Please fill all fields before submitting.");
    }
});

// Load existing data on page load
loadStudents();
