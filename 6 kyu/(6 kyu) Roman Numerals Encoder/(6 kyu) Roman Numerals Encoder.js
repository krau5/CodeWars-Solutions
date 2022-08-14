const romanNumbers = {
  'I': 1, 'II': 2, 'III': 3, 'IV': 4, 'V': 5, 'VI': 6, 'VII': 7, 'VIII': 8, 'IX': 9, 'X': 10,
  'XL': 40, 'L': 50, 'LX': 60, 'LXX': 70, 'LXXX': 80, 'XC': 90, 'C': 100,
  'CD': 400, 'D': 500, 'DC': 600, 'DCC': 700, 'DCCC': 800, 'CM': 900, 'M': 1000
}

const solution = (number) => {
  let result = 0;

  for (let i=0; i < number.length; i++){
    const currentNumber = romanNumbers[number[i]];
    const nextNumber = romanNumbers[number[i+1]];

    if (currentNumber < nextNumber){
      result += nextNumber - currentNumber;
      i += 1;
    } else {
      result += currentNumber
    }
  }

  return result;
}
