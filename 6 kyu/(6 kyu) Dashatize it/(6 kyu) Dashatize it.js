function dashatize(integer) {
  // Edge cases
  if (typeof integer !== 'number') return '';
  if (isNaN(integer)) return 'NaN';
  if (integer === 0) return '0';

  // Main code
  return (integer < 0 ? Math.abs(integer) : integer).toString().split('').map((number, index, array) => {
    if (number % 2 !== 0) {
      const nextValue = array[index + 1];
      const leadingDash = index !== 0 ? '-' : '';
      const trailingDash = (index + 1 !== array.length) && nextValue % 2 !== 0 ? '' : '-';

      return `${leadingDash}${number}${typeof nextValue === 'undefined' ? '' : trailingDash}`;
    }

    return number;
  }).join('');
}
