package kata

import "math"

func NbYear(population int, percent float64, aug int, populationToSurpass int) int {
  var years int = 0

  for ok := true; ok; ok = population < populationToSurpass {
    population += int(math.Floor(float64(population) * (percent / float64(100)) + float64(aug)))
    years += 1
  }

  return years
}
