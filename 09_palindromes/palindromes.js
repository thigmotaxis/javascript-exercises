const palindromes = (testString) => {
  const cleanString = testString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~() ]/gi, "").toLowerCase();
    for (let fromStart = 0, fromEnd = 1; fromStart < cleanString.length; fromStart ++, fromEnd ++) {
      if ((cleanString[fromStart] !== cleanString[cleanString.length - fromEnd])) return false;
  };
  return true;};

// Do not edit below this line
module.exports = palindromes;
