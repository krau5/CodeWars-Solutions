var extend = function(...args) {
  const result = {};

  [...args].map(item => {
    if (!isObject(item)) {
      return;
    }

    for ([key, value] of Object.entries(item)) {
      if (!Object.keys(result).includes(key)) {
        Object.assign(result, { [key]: value });
      }
    }
  })

  return result;
}
