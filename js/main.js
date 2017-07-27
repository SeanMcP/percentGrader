let divisor = document.getElementById('divisor');
let placeValue = document.getElementById('placeValues');
let button = document.getElementById('submitButton');

// Gets height of <header> element
let headerHeight = document.getElementById("mainHeader").offsetHeight;

// Sets padding of <main> to height of <header>
document.getElementById("mainContent").style.paddingTop = headerHeight + 'px';

let ogState = document.getElementById("output");

submitButton.addEventListener('click', function(e) {
  let numerator = divisor.value;
  let placeVal = placeValue.value;
  let ogDenom = numerator;

  ogState.innerHTML = "";

  if (numerator <= 0) {
    alert("Please choose a number greater than zero");
  } else if (numerator > 1000){
    alert("Too many problems! Please choose a smaller number")
  } else if (placeVal > 20) {
    alert("Too many decimal places! Please choose a smaller number")
  } else {
    for (let i = numerator; i >= 0; i--) {
      let calc = (numerator / ogDenom) * 100;
      let roundedNum = calc.toFixed(placeVal);
      document.getElementById('output').innerHTML += "<li>" + numerator + " / " + ogDenom + " or <strong>" + roundedNum + "%</strong>" + "</li>";
      numerator = numerator - 1;
      divisor.value = "";
      placeValue.value = "";
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
