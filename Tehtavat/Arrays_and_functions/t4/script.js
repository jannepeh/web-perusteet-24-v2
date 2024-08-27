'use strict';

function sortArray(numbers) {
  return numbers.slice().sort((a, b) => a - b);
}

let originalArray = [34, 7, 23, 32, 5, 62];

console.log('alkuperäinen taulukko:', originalArray);

let sortedArray = sortArray(originalArray);

console.log('Lajiteltu Taulukko:', sortedArray);
