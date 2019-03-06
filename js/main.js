// Establish global element variables
let myDivisor = document.getElementById('divisor');
let placeValue = document.getElementById('placeValues');
let submitBtn = document.getElementById('submitButton');
let main = document.querySelector('main');
let instructions = document.getElementById('info');

let outputFlag = false;

function genTable() {
  let numerator = myDivisor.value;
  let placeVal = placeValue.value;
  let denominator = numerator;

  if (numerator <= 0) {
    alert("Please choose a number greater than zero");
  } else if (numerator > 1000) {
    alert("Too many problems! Please choose a smaller number")
  } else if (placeVal > 20) {
    alert("Too many decimal places! Please choose a smaller number")
  } else {

    //Hide instructions and previously generated table
    instructions.remove();
    // Remove old output, if present
    if (outputFlag) {
      document.getElementById('output').remove();
      outputFlag = false;
    }
    myDivisor.value = "";
    placeValue.value = "";

    // Create and append ouput ul
    let outputUl = document.createElement('ul');
    outputUl.id = 'output';
    main.appendChild(outputUl);
    outputFlag = true;

    for (let i = numerator; i >= 0; i--) {
      // Calculate percentage
      let calc = (numerator / denominator) * 100;
      let roundedNum = calc.toFixed(placeVal);
      // Create and append li
      let newLi = document.createElement('li');
      newLi.innerHTML = `${numerator} / ${denominator} or <strong>${roundedNum}%</strong>`;
      outputUl.appendChild(newLi);
      numerator--;
    }
  }
}

submitBtn.addEventListener('click', genTable);