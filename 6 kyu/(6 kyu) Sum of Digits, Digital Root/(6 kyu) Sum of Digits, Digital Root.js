function digital_root(n) {
  const result = n.toString().split('').map(item => Number(item)).reduce((a, b) => a + b);

  if (result.toString().length === 1) {
    return result;
  }

  return digital_root(result);
}
