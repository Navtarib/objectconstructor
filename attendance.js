var rollNoInput = document.getElementById("rollno");
var markAttendanceBtn = document.getElementById("markAttendanceBtn");
var attendanceTable = document.getElementById("attendanceTable");

// Load students database from localStorage
let studentsDatabase = JSON.parse(localStorage.getItem("studentsDatabase")) || [];

// Function to find student by roll number
function findStudentByRollNo(rollNo) {
    return studentsDatabase.find((student) => student.rollNo === rollNo);
}

// Function to add attendance record to the table
function addAttendanceRecord(student) {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${student.rollNo}</td>
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>Present</td>
    `;

    attendanceTable.appendChild(row);
}

// Mark attendance event listener
markAttendanceBtn.addEventListener("click", function () {
    const rollNo = rollNoInput.value;

    // Validate input
    if (!rollNo) {
        alert("Please enter a roll number.");
        return;
    }

    // Find the student
    const student = findStudentByRollNo(rollNo);

    if (student) {
        addAttendanceRecord(student);
        rollNoInput.value = ""; // Clear the input field
    } else {
        alert("No student found with the entered roll number.");
    }
});
