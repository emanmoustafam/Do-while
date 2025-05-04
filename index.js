function calculate() {
  const input = document.querySelector('#inchesInput').value;
  const inches = parseFloat(input);
  const resultElement = document.getElementById('result');

  const cm = inches * 2.54; 
  resultElement.textContent = isNaN(inches) ? "Please enter a valid number."
    : `${inches} inches is ${cm.toFixed(2)} cm.`;
}
