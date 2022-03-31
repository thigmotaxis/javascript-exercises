const removeFromArray = function(array, ...elementsToRemove) {
  let updatedArray = [];
  for (element of array) {
    if (elementsToRemove.indexOf(element) === -1) {updatedArray.push(element)
    }
  }
  return updatedArray;
// create a function that takes an array as its first argument and then some number of additional arguments
// the function will then check the array for all of the other arguments and and remove those arguments if they are present
// could run a for loop to check each element against the other arguments, and append to a new array if element doesn't match

};

// Do not edit below this line
module.exports = removeFromArray;
