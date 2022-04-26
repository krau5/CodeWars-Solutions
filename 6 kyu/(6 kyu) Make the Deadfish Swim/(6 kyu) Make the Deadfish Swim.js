function parse(data) {
  const keys = ['i', 'd', 's', 'o'];
  const operations = data.split('').filter(char => keys.includes(char));
  const result = []
  let value = 0;

  operations.forEach(operation => {
    if (operation === 'i') value += 1;
    if (operation === 'd') value -= 1;
    if (operation === 's') value **= 2;
    if (operation === 'o') result.push(value);
  });

  return result;
}
