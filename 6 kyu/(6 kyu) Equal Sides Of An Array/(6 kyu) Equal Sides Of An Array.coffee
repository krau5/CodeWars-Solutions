findEvenIndex = (arr) ->
  sum = (arr) ->
    if arr.length == 0
      return 0

    return arr.reduce (a, b) -> a + b

  for i in [0..arr.length]
    if sum(arr.slice(0, i)) == sum(arr.slice(i + 1))
      return i

  return -1

