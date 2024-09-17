async function haeDataa() {
  try {
    const user = {
      name: 'Jony',
      job: 'Bash',
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    // eslint-disable-next-line no-undef
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    alert(error.message);
  }
}

haeDataa();
