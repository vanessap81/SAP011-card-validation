import validator from './validator.js';

const cardNumberImput = document.getElementById("cardNumber");

function isItValid() {
    // let cardNumber;
    // const re = /\d{16}/;

    // if (cardNumberImput.value.length === 16 && re.test(cardNumberImput.value)) {
    //     cardNumber = cardNumberImput.value;
    // } else {
    //     alert("Este campo deve conter 16 números");
    // }

    validator.isValid(cardNumberImput.value);
    console.log(validator.isValid(cardNumberImput.value));
    const isValidResult = validator.isValid(cardNumberImput.value);

    if (isValidResult === 0) {
        alert("Cartão válido")
    } else {
        alert("Cartão inválido")
    }
}

function maskifyIt() {
    validator.maskify(cardNumberImput.value)
}

cardNumberImput.addEventListener("blur", isItValid)
cardNumberImput.addEventListener("blur", maskifyIt)
