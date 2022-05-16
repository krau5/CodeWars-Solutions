getCount = (str) ->
  vowelsCount = 0

  for char in str.split('')
    if ['a', 'e', 'i', 'o', 'u'].includes(char)
      vowelsCount += 1

  vowelsCount
