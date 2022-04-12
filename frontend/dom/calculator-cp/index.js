let display = document.getElementById("input");
//handle when the number is pressed. It renders the number into #input element
let equation = "";

function number(number) {
  // TODO: answer here
  equation += `${number}`;
  display.value = equation;
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
  // TODO: answer here
  if (operator === "AC") {
    equation = "";
    display.value = equation;
  } else if (operator === "Del") {
    let lenEquation = equation.length;
    equation = equation.substring(0, lenEquation - 1);
    display.value = equation;
  } else {
    equation += operator;
    display.value = equation;
  }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
  // TODO: answer here
  let result = display.value;
  display.value = eval(result);
}