export function countPositivesSumNegatives(input: number[] | null) {
  if (input === null || input.length === 0) {
    return [];
  }

  return [input.filter((num: number) => num > 0).length, input.reduce((acc: number, val: number) => acc + (val < 0 ? val : 0), 0)]
}
