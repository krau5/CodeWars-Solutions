package kata

import (
  "fmt";
  "strings";
)

func wave(words string) []string {
  result := make([]string, 0)

  for i := 0; i < len(words); i++ {
    if words[i:i+1] != " " {
      result = append(result, fmt.Sprintf("%s%s%s", words[0:i], strings.ToUpper(words[i:i+1]), words[i+1:]))
    }
  }

  return result
}
