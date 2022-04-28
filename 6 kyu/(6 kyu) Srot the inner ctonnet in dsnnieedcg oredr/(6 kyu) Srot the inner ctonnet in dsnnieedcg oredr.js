function sortTheInnerContent(words) {
  return words.split(' ').map((word) => {
    if (word.length <= 3) return word;

    return `${word.charAt(0)}${word.slice(1, -1).split('').sort().reverse().join('')}${word.slice(-1)}`
  }).join(' ');
}
