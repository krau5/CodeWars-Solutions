findFirstNames = (data, lastNameLength) ->
  result = []

  for { firstName, lastName } in data
    if lastName.length == lastNameLength
      result.push(firstName)

  return result
