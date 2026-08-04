const form = document.getElementById("studentForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const submissionList = document.getElementById("submissionList");

let students = [];

form.addEventListener("submit",function(event) {
    event.preventDefault();
     
    const name = nameInput.value;
    const email = emailInput.value;
    const age = ageInput.value;

    if ( name === "" || email === ""|| age === "") {
        alert("Please fill all fields");
        return;
    }
 
    const student  = {
        name,
        email,
        age,
    }

    students.push(student);

    displayStudents();
    form.reset();

})

function displayStudents() {

  submissionList.innerHTML = "";

  students.forEach(function (student, index) {

    submissionList.innerHTML += `
      <div class="border rounded-lg p-4 shadow-sm">
        <h3 class="font-bold text-lg">
          ${index + 1}. ${student.name}
        </h3>

        <p>Email: ${student.email}</p>

        <p>Age: ${student.age}</p>
      </div>
    `;

  });

}