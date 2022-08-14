package kata

var romanNumbers map[string]int = map[string]int{
  "I": 1, "II": 2, "III": 3, "IV": 4, "V": 5, "VI": 6, "VII": 7, "VIII": 8, "IX": 9, "X": 10,
  "XL": 40, "L": 50, "LX": 60, "LXX": 70, "LXXX": 80, "XC": 90, "C": 100,
  "CD": 400, "D": 500, "DC": 600, "DCC": 700, "DCCC": 800, "CM": 900, "M": 1000,
}

func Decode(roman string) int {
  result := 0

  for i := 0; i < len(roman); i++ {
    currentNumber := romanNumbers[string(roman[i])]
    nextNumber := 0

    if i + 1 < len(roman) {
      nextNumber = romanNumbers[string(roman[i + 1])]
    }

    if currentNumber < nextNumber {
      result += nextNumber - currentNumber
      i += 1
    } else {
      result += currentNumber
    }
  }

  return result
}
