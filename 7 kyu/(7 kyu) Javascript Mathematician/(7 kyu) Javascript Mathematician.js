const calculate = (...args1) => (...args2) => {
  return [...args1, ...args2].reduce((a, b) => a + b);
}
