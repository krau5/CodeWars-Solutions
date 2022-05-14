function arraysSimilar(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1.sort()[i] !== arr2.sort()[i]) return false;
  }

  return true;
}
