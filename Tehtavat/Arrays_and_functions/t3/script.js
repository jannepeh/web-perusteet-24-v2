'use strict';

let numbers = [];

while (true) {
  let input = prompt("Kirjoita numero (tai 'valmis' lopettaaksesi):");
  if (input.toLowerCase() === 'valmis') {
    break;
  }
  let num = parseFloat(input);
  if (!isNaN(num)) {
    numbers.push(num);
  }
}

let evenNumbers = [];

for (let number of numbers) {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
}

if (evenNumbers.length > 0) {
  document.getElementById('result').innerHTML =
    'Parilliset numerot: ' + evenNumbers.join(', ');
} else {
  document.getElementById('result').innerHTML = 'Parilliset numerot: Ei mitään';
}

document.getElementById('result').innerHTML += '<br>Ohjelman loppu.';
