const buttons = document.querySelectorAll("button")
const display = document.getElementById("display")
let input = ""

buttons.forEach(button => {
    button.addEventListener("click", () => {
       const value = button.textContent;
        if (value === "AC") {
      input = "";
    }else if (value === "⌫"){
      input = input.slice(0,-1);
    } else if (value === "=") {
      try {
        const expression = input.replace(/x/g, "*").replace(/÷/g, "/");
        input = eval(expression).toString();
      } catch {
        input = "Error";
      }
    } else {
  input +=  value;
}
display.value = input;
  });
});