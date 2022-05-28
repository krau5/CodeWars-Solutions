validParentheses = (parens) ->
  if parens.length % 2 != 0
    return false

  string = parens.slice()
  i = 0

  while true
    string = string.replace(/\(\)/g,'');
    i += 1

    break unless i <= string.length

  return string.replace(/\(\)/g,'') == ''
