inArray = (keys, words) ->
  result = []

  for word in words
    for key in keys
      if word.includes(key)
        result.push(key)

  return Array.from(new Set(result)).sort()
