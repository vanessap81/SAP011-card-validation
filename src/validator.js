const validator = {
  isValid: function (creditCardNumber) {
    for (let i = 0; i < creditCardNumber.length; i++) {
      parseInt(creditCardNumber[i]);
    }

    const creditCardValidator = creditCardNumber.split("");
    creditCardValidator.reverse();

    for (let i = 1; i < creditCardValidator.length; i += 2) {
      creditCardValidator[i] *= 2;
      if (creditCardValidator[i] > 9) {
        creditCardValidator[i] = creditCardValidator[i] - 9;
      }
    }

    let result = 0;
    for (let i = 0; i < creditCardValidator.length; i++) {
      result += parseInt(creditCardValidator[i]);
    }

    result %= 10;

    if (result === 0) {
      return true;
    } else {
      return false;
    }
  },

  maskify: function (creditCardNumber) {
    const width = creditCardNumber.length;
    const quantity = creditCardNumber.length - 4;
    let maskedResult;
    if (quantity > 0) {
      const maskedSubstring = creditCardNumber.substring(0, quantity);
      const maskedString = maskedSubstring.replace(/\d/g, "#");
      const unmaskedString = creditCardNumber.substring(width - 4);
      maskedResult = maskedString + unmaskedString;
    } else {
      maskedResult = creditCardNumber;
    }
    return maskedResult;
  },
};

export default validator;
