function validParentheses(parens){
  if (parens.length % 2 !== 0) return false;

  let string = parens.slice();

  for (let i = 0; i <= string.length; i++) {
    string = string.replace(/\(\)/g,'');
  }

  return string.replace(/\(\)/g,'') === ''
}
