function validBraces(braces){
  const stack = [];
  const parens = '() [] {}';

  for (let i = 0; i < braces.length; i++) {
    stack.push(braces[i]);

    const openParen = stack[stack.length - 2];
    const closeParen = stack[stack.length - 1];

    if (parens.includes(openParen + closeParen)) {
      stack.pop();
      stack.pop();
    }
  }

  return stack.length === 0;
}
