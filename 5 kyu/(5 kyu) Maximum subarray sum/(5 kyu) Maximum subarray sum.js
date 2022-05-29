var maxSequence = function(arr){
  let sequence = 0;

  for (let i=0;i<arr.length;i++) {
    for (let j=1;j<=arr.length;j++) {
      if (arr.slice(i, j).reduce((a, b) => a + b, 0) > sequence){
        sequence = arr.slice(i, j).reduce((a, b) => a + b, 0)
      }
    }
  }

  return sequence > 0 ? sequence : 0
}
