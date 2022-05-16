function getCount(str) {
  let vowelsCount = 0;

  for (char of str.split('')) {
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}
