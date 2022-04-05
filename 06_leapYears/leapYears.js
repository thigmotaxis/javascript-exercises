const leapYears = function(possibleLeapYear) {
  if (possibleLeapYear % 400 === 0) {return true};
  if (possibleLeapYear % 100 === 0) {return false};
  if (possibleLeapYear % 4 === 0) {return true};
  return false;
};

// Create a function that determines whether or not a given year is a leap year. Leap years are determined by the following rules:
// > Leap years are years divisible by four (like 1984 and 2004).
// However, years divisible by 100 are not leap years unless they are divisible by 400

// if arg divisible by 400, return true
// if arg divisible by 100, return false
// if arg divisible by 4, return true

// create a function that returns true if the argument is a number divisible by 4
// it should return false if the argument is divisible by 100 but not 400

// Do not edit below this line
module.exports = leapYears;
