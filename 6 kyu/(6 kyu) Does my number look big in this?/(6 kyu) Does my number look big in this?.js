function narcissistic(value) {
  return value.toString().split('').map((digit, _, array) => Number(digit) ** array.length).reduce((a, b) => a + b) === value;
}
