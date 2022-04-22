const fibonacci = function(fNumber) {
  if (fNumber < 1) return "OOPS"
  let first = 0;
  let second = 1;
  for (i = 0; i < fNumber ; i++){
    if (i%2 === 1) {
      first += second;
    };
    if (i%2 === 0) {
      second += first;
    };
  };
  return (first > second) ? first : second;
};

// Do not edit below this line
module.exports = fibonacci;
