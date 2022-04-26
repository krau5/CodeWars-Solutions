function solution(input, markers) {
  let rows = input.split('\n');
  const result = [];

  for (row of rows) {
    const markerIndex = row.indexOf(markers.find(item => row.includes(item)));

    if (markerIndex < 0) {
      result.push(row);
    } else {
      result.push(row.slice(0, markerIndex).trim())
    }
  }

  return result.join('\n');
};
