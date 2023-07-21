const validator = {

  isValid: function (creditCardNumber) {

    for (let i = 0; i < creditCardNumber.length; i++) {
      parseInt(creditCardNumber[i]);
    }

    const creditCardValidator = creditCardNumber.split('');
    creditCardValidator.reverse();

    for (let i = 1; i < creditCardValidator.length; i += 2) {
      creditCardValidator[i] *= 2;
    }

    for (let i = 0; i < creditCardValidator.length; i++) {
      if (creditCardValidator[i] > 9) {
        creditCardValidator[i] = creditCardValidator[i] - 9;
      }
    }

    let result = 0;
    for (let i = 0; i < creditCardValidator.length; i++) {
      result += parseInt(creditCardValidator[i]);
    }

    result %= 10;
    return result;
  },


  maskify: function (creditCardNumber) {

    const arrayCreditCard = creditCardNumber.split('');

    let i;
    for (i = 0; i < arrayCreditCard.length - 4; i++) {
      arrayCreditCard.splice(i, 1, "#")
    }
  }

}

export default validator;
