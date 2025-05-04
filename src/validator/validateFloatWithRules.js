function validateFloatWithRules(maxDecimalDigits = 2) {
  return (value) => {
    const str = value.toString();

    if ((str.match(/\./g) || []).length > 1) {
      return false;
    }

    const num = parseFloat(str);
    if (isNaN(num)) {
      return false;
    }

    const [interPart, decimalPart] = str.split('.');

    if (decimalPart && decimalPart.length > maxDecimalDigits) {
      return false;
    }

    return true;
  };
}

module.exports = validateFloatWithRules;
