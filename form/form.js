const form =











// const form = document.getElementById("studentForm");
// const submissionList = document.getElementById("submissionList");

// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const ageInput = document.getElementById("age");

// // Store submissions
// let students = [];

// // Listen for form submission
// form.addEventListener("submit", function (event) {

//   // Prevent page refresh
//   event.preventDefault();

//   // Get values
//   const name = nameInput.value;
//   const email = emailInput.value;
//   const age = ageInput.value;

//   // Validation
//   if (name === "" || email === "" || age === "") {
//     alert("Please fill all fields");
//     return;
//   }

//   // Create object
//   const student = {
//     name,
//     email,
//     age,
//   };

//   // Save into array
//   students.push(student);

//   // Display all submissions
//   displayStudents();

//   // Clear form
//   form.reset();

// });


// // Function to display students
// function displayStudents() {

//   submissionList.innerHTML = "";

//   students.forEach(function (student, index) {

//     submissionList.innerHTML += `
//       <div class="border rounded-lg p-4 shadow-sm">
//         <h3 class="font-bold text-lg">
//           ${index + 1}. ${student.name}
//         </h3>

//         <p>Email: ${student.email}</p>

//         <p>Age: ${student.age}</p>
//       </div>
//     `;

//   });

// }