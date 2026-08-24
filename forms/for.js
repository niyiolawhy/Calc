
const mybutton = document.getElementById("sendButton");
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const texts = document.getElementById("name").value;
    const mymail = document.getElementById("email").value;
    const mymessage = document.getElementById("message").value;
    const submissionlist = document.getElementById("submissionList");

    console.log("Name:", texts);
    console.log("Email:", mymail);
    console.log("Message:", mymessage);

    // Create a new list item for the submission
    const listItem = document.createElement("p");
    listItem.textContent = `Name: ${texts}, Email: ${mymail}, Message: ${mymessage}`;
    submissionlist.appendChild(listItem);

    alert("Your message has been sent successfully!");
    form.reset();
});
