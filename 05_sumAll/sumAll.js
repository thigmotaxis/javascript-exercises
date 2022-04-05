const sumAll = function(argOne, argTwo) {
  if (typeof argOne !== "number" || typeof argTwo !== "number") {
    return "ERROR"
  }
  let lowerLimit = 0;
  let upperLimit = 0;
  if (argOne < argTwo) {
    lowerLimit = argOne;
    upperLimit = argTwo;
  }
  if (argTwo < argOne) {
    lowerLimit = argTwo;
    upperLimit = argOne;
  }
  if (argOne < 0 || argTwo < 0) {
    return "ERROR"
  }
  for (runningTotal = 0, i = 0; i <= upperLimit - lowerLimit; i ++) {
    runningTotal += lowerLimit + i;
  }
  return runningTotal;
}

// create a function that takes two integer arguments and adds all integers between them inclusive
// initialize a new variable equal to the first argument
// create a loop that adds argument one + the incrementer value while the incrementer is less than or equal to arg2 - arg1
// return the sum

// the function must work whether the largest number is first or second
// the function should return "ERROR" when passed non-number parameters

// Do not edit below this line
module.exports = sumAll;
