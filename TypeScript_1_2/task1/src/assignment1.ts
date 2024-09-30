// Interface definition for an item in the cart
interface Item {
  name: string;
  price: number;
  quantity: number;
}

const cart: Item[] = [];

function getUserInput(promptText: string): string {
  const input = prompt(promptText);
  return input ? input.trim() : '';
}

while (true) {
  const itemName = getUserInput('Enter item name (or press enter to finish):');

  if (itemName === '') {
    break;
  }

  const itemPrice = parseFloat(getUserInput('Enter item price:'));
  if (isNaN(itemPrice) || itemPrice <= 0) {
    console.log('Invalid price. Please enter a positive number.');
    continue;
  }

  const itemQuantity = parseInt(getUserInput('Enter item quantity:'), 10);
  if (isNaN(itemQuantity) || itemQuantity <= 0) {
    console.log('Invalid quantity. Please enter a positive integer.');
    continue;
  }

  const newItem: Item = {
    name: itemName,
    price: itemPrice,
    quantity: itemQuantity,
  };
  cart.push(newItem);
}

const totalCost = cart
  .map((item) => item.price * item.quantity)
  .reduce((sum, cost) => sum + cost, 0);

// Display the total cost to the user
console.log(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
