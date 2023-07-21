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

  // let cardNumber;
  // const re = /\d{13, 16}/;

  // if (cardNumberImput.value.length === 16 && re.test(cardNumberImput.value)) {
  //     cardNumber = cardNumberImput.value;
  // } else {
  //     alert("Este campo deve conter 16 números");
  // }

  validator.isValid(cardNumber);
  console.log(validator.isValid(cardNumber));
  const isValidResult = validator.isValid(cardNumber);

  if (isValidResult === 0) {
    alert("Cartão válido");
  } else {
    alert("Cartão inválido");
  }
}

function maskifyIt() {
  validator.maskify(cardNumberImput.value);
  const maskifyResult = validator.maskify(cardNumberImput.value);
  console.log(maskifyResult);
}

cardNumberImput.addEventListener("blur", isItValid);
cardNumberImput.addEventListener("blur", maskifyIt);
