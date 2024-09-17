async function asyncFunktio() {
  console.log('async download begins');
  // await auttaa odottamaan, että fetch-kutsu saa vastauksen ennen ku koodi jatkuu
  try {
    const response = await fetch('https://reqres.in/api/users/1', {
      method: 'GET',
    });
    // odotat vastausta (response) jsonilta ennen kuin koodi jatkuu
    const data = await response.json();
    console.log(data);
    // mahdolliset errorit kiinni ja viesti konsoliin, mutta jatkaa silti koodia
  } catch (error) {
    console.log(error.message);
    // finally jatkaa koodia oli virhe tai ei
  } finally {
    console.log('async load complete');
  }
}

asyncFunktio();

console.log('The end');
