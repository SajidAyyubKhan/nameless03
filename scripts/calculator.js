let calculation = localStorage.getItem('calculation') || '';
showCalculation();

function performOperation(input) {
  calculation += input;
  showCalculation();
  localStorage.setItem('calculation', calculation);
}

function showCalculation() {
  const displayElement = document.querySelector('.display-screen');
  displayElement.value = calculation;
}