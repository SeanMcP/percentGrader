let divisor = document.getElementById('divisor');
let placeValue = document.getElementById('placeValues');
let button = document.getElementById('submitButton');

// Gets height of <header> element
let headerHeight = document.getElementById("mainHeader").offsetHeight;

// Sets padding of <main> to height of <header>
document.getElementById("mainContent").style.paddingTop = headerHeight + 'px';

let ogState = document.getElementById("output");

submitButton.addEventListener('click', function(e) {
  let denom = divisor.value;
  let placeVal = placeValue.value;
  let ogDenom = denom;

  ogState.innerHTML = "";

  if (denom <= 0) {
    alert("Please choose a number greater than zero");
  } else if (denom > 1000){
    alert("Too big to compute! Please choose a smaller number")
  } else {
    for (let i = denom; i >= 0; i--) {
      let calc = (denom / ogDenom) * 100;
      let roundedNum = calc.toFixed(placeVal);
      document.getElementById('output').innerHTML += "<li>" + denom + " / " + ogDenom + " or <strong>" + roundedNum + "%</strong>" + "</li>";
      denom = denom - 1;
    }
  }
});


// var nameInput = document.getElementById('nameInput');
// var emailInput = document.getElementById('emailInput');
// var signupButton = document.getElementById('signupButton');
// signupButton.addEventListener('click', function(e) {
//   var nameVal = nameInput.value;
//   var emailVal = emailInput.value;
//   if (nameVal && emailVal) {
//     alert('Thanks for signing up, ' + nameVal + '. Newsletters will be sent to ' + emailVal);
//     nameInput.value = "";
//     emailInput.value = "";
//   } else {
//     alert('We would love for you to sign up, please provide both your name and email address.');
//   }
// });
