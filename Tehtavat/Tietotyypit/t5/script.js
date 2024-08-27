'use strict';

function calculateSum() {
  let number = parseInt(document.getElementById('numberInput').value);

  if (isNaN(number) || number <= 0) {
    document.getElementById('result').innerHTML =
      'Anna kelvollinen positiivinen kokonaisluku.';
    return;
  }

  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  // näytä tulos
  document.getElementById('result').innerHTML =
    'Kaikkien luonnollisten lukujen summa aina mukaan lukien ' +
    number +
    ' on: ' +
    sum;
}
