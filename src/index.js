import validator from './validator.js';

console.log(validator);

const inputDoCartao = document.getElementById("cardNumber");

function capturarInput() {

    // let numeroDoCartao;
    // let re = /\d{16}/;

    // if (inputDoCartao.value.length == 16 && re.test(inputDoCartao.value)) {
    //     numeroDoCartao = inputDoCartao.value;
    //     console.log(numeroDoCartao);
    // } else {
    //     alert("Este campo deve conter 16 números");
    // };

    validator.isValid(inputDoCartao.value);
    validator.maskify(inputDoCartao.value);
};

inputDoCartao.addEventListener("blur", capturarInput);

