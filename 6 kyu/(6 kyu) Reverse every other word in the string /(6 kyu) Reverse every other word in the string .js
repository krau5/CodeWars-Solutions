function reverse(str){
  return str.trim().split(' ').map((word, index) => {
    if (index % 2 === 0) {
      return word;
    }

    return word.split('').reverse().join('')
  }).join(' ')
}
