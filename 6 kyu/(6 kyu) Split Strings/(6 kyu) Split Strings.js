function solution(string) {
  const result = [];

  for (let index = 0; index < string.length; index++) {
    const value = string.slice(index, index + 2);

    result.push(value.length === 1 ? `${value}_` : value);
    index += 1;
  }

  return result;
}
