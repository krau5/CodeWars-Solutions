function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }

  return [input.filter(num => num > 0).length, input.reduce((acc, val) => acc + (val < 0 ? val : 0), 0)];
}
