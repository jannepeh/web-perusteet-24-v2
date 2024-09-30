// Define the squareRoot function
function squareRoot(num: number | null | undefined): number | string {
  if (num === undefined || num === null) {
    return 'Input is undefined or null.';
  }

  if (typeof num !== 'number' || isNaN(num)) {
    return 'Invalid input. Please enter a valid number.';
  }

  if (num < 0) {
    return 'Cannot calculate square root of a negative number.';
  }

  const sqrt = Math.sqrt(num);
  return sqrt;
}

const userInput = prompt('Enter a number:');

const numberInput: number | undefined = userInput
  ? parseFloat(userInput)
  : undefined;

const result = squareRoot(numberInput);
console.log(result);
