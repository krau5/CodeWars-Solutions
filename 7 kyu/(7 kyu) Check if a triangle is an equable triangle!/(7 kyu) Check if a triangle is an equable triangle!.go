package kata

import "math"

func EquableTriangle(a, b, c int) bool {
  perimeter := float64(a + b + c)
  semiperimeter := float64(perimeter / 2)
  area := math.Sqrt(semiperimeter * (semiperimeter - float64(a)) * (semiperimeter - float64(b)) * (semiperimeter - float64(c)))

  return perimeter == area
}
