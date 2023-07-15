import validator from './validator.js';

console.log(validator);


let inputDoCartao = document.getElementById("cardNumber");


function checkData() {

    if (inputDoCartao.value == "") {
        alert("Numero não informado");
    } if (inputDoCartao.value.length > 0 && inputDoCartao.value.length < 16) {
        alert("Este campo precisa ter 16 números");
    } if (inputDoCartao.value.length == 16) {
        console.log("Quantidade de números certa");
    } else {
        console.log("Números digitados");
    }
};

// executa função quando o elemento perde o foco
inputDoCartao.onblur = function () {

    checkData();

    let dadosDoCartao;
    dadosDoCartao = document.getElementById("cardNumber").value;

    console.log(dadosDoCartao);
};








