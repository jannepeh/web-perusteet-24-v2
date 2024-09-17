async function asyncFunktio() {
  console.log('POST request...');

  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Khubs',
        job: 'Waiter',
      }),
    });

    const postData = await response.json();
    console.log('POST:', postData);

    console.log('GET request...');
    const getResponse = await fetch('https://reqres.in/api/users/1');
    const getData = await getResponse.json();
    console.log('GET:', getData);

    console.log('DELETE request...');
    const deleteResponse = await fetch('https://reqres.in/api/users/1', {
      method: 'DELETE',
    });
    console.log('DELETE request successful');
  } catch (error) {
    console.log('Error:', error.message);
  }
}

asyncFunktio();

console.log('The end');
