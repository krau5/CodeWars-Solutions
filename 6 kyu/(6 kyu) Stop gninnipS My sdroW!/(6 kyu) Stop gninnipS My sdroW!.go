package kata

import "strings"

func Reverse(s string) string {
    runes := []rune(s)
    for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
        runes[i], runes[j] = runes[j], runes[i]
    }
    return string(runes)
}

func SpinWords(str string) string {
  result := make([]string, 0)

  for _, word := range strings.Fields(str) {
    if len(word) >= 5 {
      result = append(result, Reverse(word))
    } else {
      result = append(result, word)
    }
  }

  return strings.Join(result, " ")
}
