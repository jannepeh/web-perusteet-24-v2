'use strict';

let numbers = [];

for (let i = 1; i <= 5; i++) {
  let num = parseFloat(prompt(`Syötä numero ${i}:`));
  numbers.push(num);
}

console.log('Numerot:', numbers);
document.getElementById('result').innerHTML +=
  'Numerot: ' + numbers.join(', ') + '<br>';

let searchNumber = parseFloat(prompt('Kirjoita haettava numero:'));

if (numbers.includes(searchNumber)) {
  console.log(`Numero ${searchNumber} löytyy taulukosta.`);
  document.getElementById('result').innerHTML +=
    `Numero ${searchNumber} löytyy taulukosta.<br>`;
} else {
  console.log(`Numero ${searchNumber} Ei löytynyt taulukosta.`);
  document.getElementById('result').innerHTML +=
    `Numero ${searchNumber} Ei löytynyt taulukosta.<br>`;
}

numbers.pop();

console.log('Päivitetyt numerot:', numbers);
document.getElementById('result').innerHTML +=
  'Päivitetyt numerot: ' + numbers.join(', ') + '<br>';

numbers.sort((a, b) => a - b);

console.log('Järjestetyt numerot:', numbers);
document.getElementById('result').innerHTML +=
  'Järjestetyt numerot: ' + numbers.join(', ') + '<br>';
