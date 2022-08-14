package kata

import "strings"

func CamelCase(words string) string {
  return strings.Join(strings.Fields(strings.Title(words)), "")
}
