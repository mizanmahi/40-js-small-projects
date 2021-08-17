const calculator = document.getElementById('calculator');
const screenInput = document.getElementById('screen_input'); // @ screen input
const btns = calculator.querySelector('.btns');
const operators = document.querySelectorAll('.operator');


let operator = null;
let firstInputNumber = 0;
let secondInputNumber = 0;

btns.addEventListener('click', function (e) {
  if(e.target.className.includes('key')){
    let target = e.target;
    let action = target.dataset.action;
  
    if (!action) {
      let clickedNumber = target.dataset.value;
      let currentDisplayedNumber = screenInput.value;
  
      if (
        currentDisplayedNumber === '0' ||
        operator !== null ||
        operator === '='
      ) {
        screenInput.value = clickedNumber;
      } else {
        screenInput.value = currentDisplayedNumber + clickedNumber;
      }
    } else {
      if (action !== '=' && action !== 'C') {
        operator = action;
        firstInputNumber = screenInput.value;
        e.target.classList.add('pressed');
      } else if (action === 'C') {
        screenInput.value = '';
        firstInputNumber = 0;
        secondInputNumber = 0;
        operator = null;
      } else {
        secondInputNumber = screenInput.value;
  
        const result = calculate(firstInputNumber, operator, secondInputNumber);
        operator = action;
        screenInput.value = result;
        firstInputNumber = 0;
        secondInputNumber = 0;
        operators.forEach((op) => {
          op.classList.remove('pressed');
        });
      }
    }
  }
});

// @ calculaing function
function calculate(firstOperand, operator, secondOperand) {
  if (operator === '+') {
    return parseFloat(firstOperand) + parseFloat(secondOperand);
  }
  if (operator === '-') {
    return parseFloat(firstOperand) - parseFloat(secondOperand);
  }
  if (operator === '/') {
    return parseFloat(firstOperand) / parseFloat(secondOperand);
  }
  if (operator === '*') {
    return parseFloat(firstOperand) * parseFloat(secondOperand);
  }
}
