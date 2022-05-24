function sum(arr: number[]) {
  if (arr.length === 0) {
    return 0;
  }

  return arr.reduce((a, b) => a + b);
}

export function findEvenIndex(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    if (sum(arr.slice(0, i)) === sum(arr.slice(i + 1))) {
      return i
    }
  }

  return -1;
}
