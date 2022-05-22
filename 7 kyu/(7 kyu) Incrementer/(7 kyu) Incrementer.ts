export const incrementer = (nums: number[]): number[] => {
  return nums.map((num, index) => num + index + 1).map(num => num.toString().length > 1 ? Number(num.toString().slice(-1)) : num);
}
