let divisor = document.getElementById('divisor');
let placeValue = document.getElementById('placeValues');
let button = document.getElementById('submitButton');
let mainContent = document.getElementById('mainContent');

// Gets height of header and footer element
// let headerHeight = document.getElementById("mainHeader").offsetHeight;
// let footerHeight = document.getElementById("mainFooter").offsetHeight;
//
// // Sets padding of <main> to height of <header>
// document.getElementById("mainContent").style.paddingTop = headerHeight + 'px';
// document.getElementById("mainContent").style.paddingBottom = footerHeight + 'px';

let hideInfo = document.getElementById("infoHide");

let outputFlag = false;

function genTable(){
  let numerator = divisor.value;
  let placeVal = placeValue.value;
  let denominator = numerator;

  if (numerator <= 0) {
    alert("Please choose a number greater than zero");
  } else if (numerator > 1000){
    alert("Too many problems! Please choose a smaller number")
  } else if (placeVal > 20) {
    alert("Too many decimal places! Please choose a smaller number")
  } else {

    //Hide instructions and previously generated table
    hideInfo.remove();
    // Remove old output, if present
    if(outputFlag){
      document.getElementById('output').remove();
      outputFlag = false;
    }
    divisor.value = "";
    placeValue.value = "";

    // Create and append ouput ul
    let outputUl = document.createElement('ul');
    outputUl.id = 'output';
    mainContent.appendChild(outputUl);
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

var touchEvent = 'ontouchstart' in window ? 'touch' : 'click';

submitButton.addEventListener('click', genTable);
submitButton.addEventListener('touchstart', genTable);
