const findUniq = (array) => {
  return Number(array.filter(element => array.indexOf(element) === array.lastIndexOf(element)))
}
