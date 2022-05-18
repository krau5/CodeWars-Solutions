function toCamelCase(string, variant) {
  return string.split(' ').map((word, index, array) => {
    if (variant === 1) {
      if (index === 0) {
        return word.toLowerCase();
      }

      return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
    }

    if (variant === 2) {
      if (index + 1 === array.length) {
        return word.toLowerCase();
      }

      return `${word.slice(0, -1).toLowerCase()}${word.charAt(word.length - 1).toUpperCase()}`;
    }

    if (variant === 3) {
      if (index === 0) {
        return `${word.slice(0, -1).toLowerCase()}${word.charAt(word.length - 1).toUpperCase()}`;
      }

      if (index + 1 === array.length) {
        return `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`;
      }

      return `${word.charAt(0).toUpperCase()}${word.slice(1, -1).toLowerCase()}${word.charAt(word.length - 1).toUpperCase()}`;
    }
  }).join('');
}
