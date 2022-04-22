//handle when the number is pressed. It renders the number into #input element
function number(number) {
  // TODO: answer here
  let input = document.getElementById('input');
  let inputValue = input.value;
  console.log(number);
  console.log(inputValue);
  if (number == 9) {
      input.value = inputValue + '9';
  } else if (number == 8) {
      input.value = inputValue + '8';
  } else if (number == 7) {
      input.value = inputValue + '7';
  } else if (number == 6) {
      input.value = inputValue + '6';
  } else if (number == 5) {
      input.value = inputValue + '5';
  } else if (number == 4) {
      input.value = inputValue + '4';
  } else if (number == 3) {
      input.value = inputValue + '3';
  } else if (number == 2) {
      input.value = inputValue + '2';
  } else if (number == 1) {
      input.value = inputValue + '1';
  } else if (number == 0) {
      input.value = inputValue + '0';
  } else {
      console.log('error');
  }
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
  let input = document.getElementById('input');
  if (operator == 'Del') {
      // TODO: answer here
      let inputValue = input.value;
      input.value = inputValue.substring(0, inputValue.length - 1);
  } else if (operator == "AC") {
      // TODO: answer here
      input.value = '';
  } else if (operator == '+') {
      input.value = input.value + operator;
  } else if (operator == '-') {
      input.value = input.value + operator;
  } else if (operator == '*') {
      input.value = input.value + operator;
  } else if (operator == '/') {
      input.value = input.value + operator;
  } else if (operator == '.') {
      input.value = input.value + operator;
  } else if (operator == '=') {
      calculate();
  } 
  else {
      console.log('error');
  }
}
//handle when = button is pressed. It renders the result into #input element
function calculate() {
  // TODO: answer here
  let input = document.getElementById('input');
  let inputValue = input.value;
  let result = eval(inputValue);
  input.value = result;
}