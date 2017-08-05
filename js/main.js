let divisor = document.getElementById('divisor');
let placeValue = document.getElementById('placeValues');
let button = document.getElementById('submitButton');

// Gets height of header and footer element
let headerHeight = document.getElementById("mainHeader").offsetHeight;
let footerHeight = document.getElementById("mainFooter").offsetHeight;

// Sets padding of <main> to height of <header>
document.getElementById("mainContent").style.paddingTop = headerHeight + 'px';
document.getElementById("mainContent").style.paddingBottom = footerHeight + 'px';

let ogState = document.getElementById("output");
let hideInfo = document.getElementById("infoHide");

function genTable(){
  let numerator = divisor.value;
  let placeVal = placeValue.value;
  let ogDenom = numerator;

  if (numerator <= 0) {
    alert("Please choose a number greater than zero");
  } else if (numerator > 1000){
    alert("Too many problems! Please choose a smaller number")
  } else if (placeVal > 20) {
    alert("Too many decimal places! Please choose a smaller number")
  } else {

    //Hide instructions and previously generated table
    ogState.innerHTML = "";
    hideInfo.innerHTML = "";
    hideInfo.style.margin = 0;
    hideInfo.style.padding = 0;

    for (let i = numerator; i >= 0; i--) {
      let calc = (numerator / ogDenom) * 100;
      let roundedNum = calc.toFixed(placeVal);
      output.innerHTML += `<li> ${numerator} / ${ogDenom} or <strong>${roundedNum}%</strong></li>`
      numerator = numerator - 1;
      divisor.value = "";
      placeValue.value = "";
    }
  }
}

submitButton.addEventListener('click', genTable);
