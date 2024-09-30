export {};

type ElectronicDevice = {
  type: 'electronic';
  brand: string;
  model: string;
};

type Book = {
  type: 'book';
  title: string;
  author: string;
};

type Product = ElectronicDevice | Book;

function createElectronicDevice(): ElectronicDevice {
  const brand = prompt('Enter the brand of the electronic device:') || '';
  const model = prompt('Enter the model of the electronic device:') || '';

  return {
    type: 'electronic',
    brand,
    model,
  };
}

function createBook(): Book {
  const title = prompt('Enter the title of the book:') || '';
  const author = prompt('Enter the author of the book:') || '';

  return {
    type: 'book',
    title,
    author,
  };
}

const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

function displayProductDetails(product: Product) {
  console.log(`Product Type: ${product.type}`);
  if (product.type === 'electronic') {
    console.log(`Brand: ${product.brand}`);
    console.log(`Model: ${product.model}`);
  } else if (product.type === 'book') {
    console.log(`Title: ${product.title}`);
    console.log(`Author: ${product.author}`);
  }
}

console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);

console.log();

console.log('Book Details:');
displayProductDetails(bookProduct);
