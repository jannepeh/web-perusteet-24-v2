'use strict';

const kohde = document.querySelector('#target');

const sivu1 = +prompt('Syötä ensimmäinen sivu');
const sivu2 = +prompt('Syötä toinen sivu');
const sivu3 = +prompt('Syötä kolmas sivu');

if (sivu1 === sivu2 && sivu2 === sivu3) {
  // tasasivunen
  kohde.innerHTML = 'Kolmio on tasasivuinen';
} else if (sivu1 !== sivu2 && sivu2 !== sivu3 && sivu3 !== sivu1) {
  // epäsäännöllinen
  kohde.innerHTML = 'Kolmio on epäsäännöllinen';
} else {
  kohde.innerHTML = 'Kolmio on tasakylkinen';
}
