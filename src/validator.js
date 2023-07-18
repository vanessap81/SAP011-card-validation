const validator = {

  isValid: function (creditCardNumber) {

  },

  maskify: function (creditCardNumber) {

    //não esta funcionando
    const regra = /\d/;
    creditCardNumber.replace(regra, '#');
    console.log(creditCardNumber);
  }

}

export default validator;
