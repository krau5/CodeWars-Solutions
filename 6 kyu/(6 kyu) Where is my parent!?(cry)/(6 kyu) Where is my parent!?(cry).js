function findChildren(dancingBrigade) {
  return Array.from(new Set(dancingBrigade.toLowerCase())).sort().map(letter => {
    const letterCount = dancingBrigade.split('').filter(char => char === letter).length;

    return `${letter.toUpperCase()}${letter.repeat(letterCount)}`
  }).join('');
}
