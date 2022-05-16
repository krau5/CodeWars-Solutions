solution = (input, markers) ->
  rows = input.split('\n');
  result = [];

  for row in rows
    markerIndex = row.indexOf(markers.filter (marker) -> row.includes(marker))

    if markerIndex < 1
      result.push(row)
    else
      console.log(row);
      result.push(row.slice(0, markerIndex).trim())

  result.join('\n')
