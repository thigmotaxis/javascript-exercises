const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};
// sum should equal 0 when calling calculator.sum([])
const sum = (inputArray) => inputArray.reduce((total, currentValue) => {
	total += currentValue;
	return total;
}, 0);

const multiply = (inputArray) => inputArray.reduce((product, factor) => {
	return product *= factor;
});

const power = (base, exponent) =>  {return base ** exponent;};

const factorial = (fact) => {
	let product = 1;
	for (; fact > 0; fact --) {
		product *= fact;
	};
	return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
