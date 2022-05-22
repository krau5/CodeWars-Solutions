function isValidIP(str) {
  if (/[^0-9\.]/gi.test(str)) {
    return false;
  }

  if (str.split('.').length !== 4 || str.split('').filter(char => char === '.').length !== 3) {
    return false;
  }

  for (chunk of str.split('.')) {
    if (chunk.trim().length === 0) {
      return false;
    }

    if (chunk.length > 1 && chunk.charAt(0) === '0') {
      return false;
    }

    if (Number(chunk) > 255 || Number(chunk) < 0) {
      return false;
    }
  }

  return true;
}
