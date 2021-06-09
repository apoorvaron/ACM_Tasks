const display = document.querySelector("#display");

const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

function calculate(event) {
  const clickedButtonValue = event.target.value;
  console.log(clickedButtonValue);

  if (clickedButtonValue === "=") {
    if (display.value !== "") {
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === "AC") {
    display.value = "";
  } else {
    display.value += clickedButtonValue;
  }
}
