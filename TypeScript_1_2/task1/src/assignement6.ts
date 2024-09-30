function reverseArray<T>(array: T[]): T[] {
  return array.reverse();
}

const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ['apple', 'banana', 'cherry', 'date'];
const mixedArray: (string | number | boolean)[] = [true, 42, 'hello', false];

const reversedNumberArray = reverseArray(numberArray);
const reversedStringArray = reverseArray(stringArray);
const reversedMixedArray = reverseArray(mixedArray);

// Display the results
console.log('Reversed Array of Numbers:', reversedNumberArray);
console.log('Reversed Array of Strings:', reversedStringArray);
console.log('Reversed Mixed Array:', reversedMixedArray);
