# Validação de cartão de crédito - Duckling 

## Apresentação

Este projeto foi construído dentro da proposta do Projeto 1 do Bootcamp Laboratoria.la. Nesse projeto, a proposta é a da construção de um validador de número de cartão de crédito, a partir da utilização do [Algoritmo de Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm).

Os objetivos gerais do projeto compreendiam:
1. Trabalhar com base em um boilerplate através de módulos em JS;
2. Conhecer as ferramentas de manutenção e melhoria do código (linters e testes unitários);
3. Aprender sobre objetos, estruturas, métodos e iteração (loops) em JavaScript;
4. Implementar controle de versão com git (e a plataforma github).

Dentre os Critérios de Aceitação Mínimos do Projeto estão: 
1. Para a interface: permitir ao usuário inserir o número que desejamos validar; usar apenas caracteres numéricos (dígitos) no cartão para validar [0-9]; constatar se o resultado é válido ou não; ocultar todos os dígitos do número do cartão, excetuando os últimos 4 caracteres e não poder inserir um campo vazio. 
2. Testes unitários dos métodos.
3. Código do projeto enviado para repositório e interface "implantada". 
4. Um README contendo uma definição de produto.
   
Obs: A exibição da franquia do cartão validado constituiu marco opcional do projeto. 

## Interface

### Identidade
A interface contruída foi pensada para ser a área de pagamento com cartão de crédito de uma loja virtual de produtos divertidos para decoração de casa. 
O tema da loja foi constuído com vistas ao público jovem, sobretudo jovens adultos, afeitos à decoração descontraída de seus locais de estudo, trabalho ou descanso. A paleta escolhida faz uso de cores alegres, que remetem ao verão. O mascote da loja é um patinho de borracha, item de que se tirou a inspiração para o nome da loja (duckling = do inglês, patinho, filhote de pato :duck:).

<img src="https://github.com/vanessap81/SAP011-card-validation/assets/87100153/37a50f47-db24-4992-9ecc-88a36621e9f0" height="300" />

### Sua relação com o usuário
Para a área de inserção dos dados, pensou-se principalmente em oferecer respostas rápidas ao usuário e em reduzir as chances de repetição de procedimentos que envolvem a compra por meio virtual. Por isso, a resposta quanto à validação do número do cartão é exibida a partir do momento em que a área relativa a esse dado perde o foco (e não depois de o formulário todo ser preenchido e submetido). 

<img src="https://github.com/vanessap81/SAP011-card-validation/assets/87100153/099df2d5-deaf-4af9-b2ad-d4ac3a3cde98" height="300" />

### Critérios
O produto atende aos critérios estabelecidos para o resultado do projeto proposto. 

1. Para a interface:
  - Permitir ao usuário inserir o número que desejamos validar; usar apenas caracteres numéricos (dígitos) no cartão para validar [0-9]

   <img src="https://github.com/vanessap81/SAP011-card-validation/assets/87100153/d0a1eb7c-ccca-4b95-93a4-290404f95d3b" height="300" />

   <img src="https://github.com/vanessap81/SAP011-card-validation/assets/87100153/e8bba4ea-aeda-405c-a703-837fa74c6adb" height="300" />

   - Constatar se o resultado é válido ou não;
   - Ocultar todos os dígitos do número do cartão, excetuando os últimos 4 caracteres;

  <img src="https://github.com/vanessap81/SAP011-card-validation/assets/87100153/e8d0c89c-117c-4f59-a9d4-207e95979441" height="300" />

  <img src="https://github.com/vanessap81/SAP011-card-validation/assets/87100153/108a39c1-f1ce-49ca-a8dd-4b869e7509ac" height="300" />

   - Não poder inserir um campo vazio.

  <img src="https://github.com/vanessap81/SAP011-card-validation/assets/87100153/b427455b-57b4-431c-abfa-74fb3da5964f" height="300" />

   
2. Testes unitários dos métodos.
   - O código construído passou em todos os testes estabelecidos no arquivo validator.spec.js , que compunha o boilerplate disponibilizado pelo Bootcamp.

  <img src="https://github.com/vanessap81/SAP011-card-validation/assets/87100153/356ee20f-9e39-4b79-8ced-48e13cec34ee" height="300" />
