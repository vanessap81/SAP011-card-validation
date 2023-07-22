import validator from "./validator.js";

const cardNumberImput = document.getElementById("cardNumber");

const messageIsValid = "Número de cartão válido";
const messageNotValid = "Número de cartão inválido";
const message = document.getElementById("message");

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
    document.getElementById("message").innerHTML = messageIsValid;
    message.style.color = "green";
  } else {
    document.getElementById("message").innerHTML = messageNotValid;
    message.style.color = "red";
  }
}

function maskifyIt() {
  validator.maskify(cardNumberImput.value);
  const maskedResult = validator.maskify(cardNumberImput.value);
  cardNumberImput.value = maskedResult;
}

cardNumberImput.addEventListener("blur", isItValid);
cardNumberImput.addEventListener("blur", maskifyIt);
