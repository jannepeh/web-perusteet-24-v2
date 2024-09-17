async function asyncFunktio() {
  console.log('Sending user data...');

  try {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Jony',
        job: 'Bricklayer',
      }),
    });

    // tarkasta, et vastaus onnistunut
    const data = await response.json();
    console.log('Response from server:', data);
  } catch (error) {
    console.log('Error:', error.message);
  } finally {
    console.log('async load complete');
  }
}

asyncFunktio();

console.log('The end');
