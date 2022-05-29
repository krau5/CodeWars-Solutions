Math.round = function(number) {
  if (number % 1 > 0.5 || number % 1 === 0.5) {
    return ~~number + 1
  }

  return ~~number;
};

Math.ceil = function(number) {
  return Number.isInteger(number) ? number : ~~number + 1
};

Math.floor = function(number) {
  return ~~number
};
