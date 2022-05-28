package kata

func IsTriangle(a, b, c int) bool {
  return a + b > c && a + c > b && b + c > a
}
