const repeatString = function(string, num) {
  let stringRepeated = "";
  for (let i = 0; i < num; i ++) {
    stringRepeated += string;
  }
  if (num < 0) {return "ERROR"};
  return stringRepeated;
};

// Do not edit below this line
module.exports = repeatString;
