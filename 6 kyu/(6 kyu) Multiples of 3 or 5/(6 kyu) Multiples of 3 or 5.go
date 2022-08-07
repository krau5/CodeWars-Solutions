package kata

func Multiple3And5(number int) int {
  score := 0

  for i := 0; i < number; i++ {
    if i % 3 == 0 || i % 5 == 0 {
      score += i
    }
  }

  return score
}
