'user strict';

function calculateDistance() {
  // Get the input values for both points
  let point1 = document.getElementById('point1Input').value;
  let point2 = document.getElementById('point2Input').value;

  let coords1 = point1.split(',');
  let coords2 = point2.split(',');

  let x1 = parseFloat(coords1[0]);
  let y1 = parseFloat(coords1[1]);
  let x2 = parseFloat(coords2[0]);
  let y2 = parseFloat(coords2[1]);

  if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
    document.getElementById('result').innerHTML =
      'Please enter valid coordinates.';
    return;
  }

  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  // Display the result
  document.getElementById('result').innerHTML =
    'The distance between the points is: ' + distance.toFixed(2);
}
