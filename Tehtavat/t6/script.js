'use strict';

const kohde = document.querySelector('#target');

const elokuvat = [];

const lkm = prompt('Syötä elokuvien lkm: ');

for (let i = 0; i < lkm; i++) {
  const title = prompt('Syötä elokuvan nimi. Tyhjä lopettaa: ');
  const rating = prompt('Syötä arvio (1-5): ');
  const elokuva = {
    title,
    rating,
  };

  elokuvat.push(elokuva);
}
