const reverseString = function(userString) {
  let stringReversed = "";
  let update = userString.length;
  while (update >= 0) {
    stringReversed += userString.charAt(update);
    update -= 1;
  };
  return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
