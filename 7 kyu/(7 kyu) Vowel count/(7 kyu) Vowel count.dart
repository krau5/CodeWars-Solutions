import "dart:core";

int getCount(String inputStr){
  //your code here
  var vowelsCount = 0;

  for (final char in inputStr.split('')) {
    if (['a', 'e', 'i', 'o', 'u'].contains(char)) {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
}
