function lengthOrSquare(value: string | number): number {
  if (typeof value === 'string') {
    return value.length;
  } else {
    return value * value;
  }
}

const userInput2 = prompt('Enter a value (string or number):');

// Determine if user input is a number or a string
const parsedValue: string | number = !isNaN(Number(userInput))
  ? Number(userInput)
  : userInput!;

const result2 = lengthOrSquare(parsedValue);
console.log(`Type of result: ${typeof result}`);
console.log(`Result: ${result}`);
