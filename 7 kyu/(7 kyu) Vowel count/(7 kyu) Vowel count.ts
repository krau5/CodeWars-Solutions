export class Kata {
  static getCount(str: string): number {
    let vowelsCount = 0;

    [...str.split('')].forEach(char => ['a', 'e', 'i', 'o', 'u'].includes(char) && vowelsCount++);

    return vowelsCount;
  }
}
