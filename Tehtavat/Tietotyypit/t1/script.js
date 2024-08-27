'use strict';

function convertTemperature() {
  var celsius = parseFloat(document.getElementById('celsiusInput').value);

  // Check if the input is a valid number
  if (isNaN(celsius)) {
    document.getElementById('result').innerHTML =
      'Please enter a valid number.';
    return;
  }

  // Conversion formulas
  var fahrenheit = (celsius * 9) / 5 + 32;
  var kelvin = celsius + 273.15;

  // Display results
  document.getElementById('result').innerHTML =
    'Temperature in Fahrenheit: ' +
    fahrenheit.toFixed(2) +
    ' °F<br>' +
    'Temperature in Kelvin: ' +
    kelvin.toFixed(2) +
    ' K';
}
