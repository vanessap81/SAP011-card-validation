import validator from './validator.js';

console.log(validator);








const inputDoCartao = document.getElementById("cardNumber");


inputDoCartao.onblur = function () {

    let numeroDoCartao;

    if (inputDoCartao.value.length == 16) {
        numeroDoCartao = inputDoCartao.value;

    } else {
        alert("Este campo precisa ter 16 números");
    };

    // console.log(numeroDoCartao);



    for (let i = 0; i <= 16; i++) {


    }


};








