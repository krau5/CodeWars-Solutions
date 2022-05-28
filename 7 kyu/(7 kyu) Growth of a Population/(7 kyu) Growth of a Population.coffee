nbYear = (population, percent, aug, populationToSurpass) ->
  years = 0;

  while true
    population += ~~(population * (percent / 100) + aug)
    years += 1

    break unless population < populationToSurpass

  return years
