import validator from "./validator.js";

const cardNumberImput = document.getElementById("cardNumber");

function isItValid() {
  let cardNumber;
  const re = /\d/;

  if (re.test(cardNumberImput.value)) {
    cardNumber = cardNumberImput.value;
  } else {
    alert("Este campo deve conter apenas números");
  }

  validator.isValid(cardNumber);
  const isValidResult = validator.isValid(cardNumber);

  if (isValidResult === true) {
    alert("Cartão válido");
  } else {
    alert("Cartão inválido");
  }
}

function maskifyIt() {
  validator.maskify(cardNumberImput.value);
}

cardNumberImput.addEventListener("blur", isItValid);
cardNumberImput.addEventListener("blur", maskifyIt);
