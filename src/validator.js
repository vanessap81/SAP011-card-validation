const validator = {

  isValid: function (creditCardNumber) {

    let arrayCreditCardV = creditCardNumber.split('');
    console.log(arrayCreditCardV);

    arrayCreditCardV.reverse();
    console.log(arrayCreditCardV);
  },


  maskify: function (creditCardNumber) {

    let arrayCreditCard = creditCardNumber.split('');

    let i;
    let quantidade = arrayCreditCard.length;

    for (i = 0; i < quantidade - 4; i++) {
      arrayCreditCard.splice(i, 1, "#")
    };
    console.log(arrayCreditCard);

  }

}

export default validator;
