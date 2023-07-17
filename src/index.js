import validator from './validator.js';

console.log(validator);







//acessar o elemento por ID e encapsular numa constante
const inputDoCartao = document.getElementById("cardNumber");

function capturarInput() {

    let numeroDoCartao;

    if (inputDoCartao.value.length == 16) {
        numeroDoCartao = inputDoCartao.value;
    } else {
        alert("Este campo precisa ter 16 números");
    };

    console.log(numeroDoCartao);

    // numeroDoCartao é um String
    // para separar elementos de uma string e transformar numa array o método é split()
    // mas para o método split é necessário um separador
    // quero inserir um separador(virgula ou espaço) depois de cada elemento da string

    // for (let i = 0; i <= 16; i++) {
    // }
};

//disparar a função quando o input perder o focus
inputDoCartao.addEventListener("blur", capturarInput);

