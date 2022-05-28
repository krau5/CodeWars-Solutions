int nbYear(int population, double percent, int aug, int populationToSurpass) {
  var years = 0;

  do {
    population += (population * (percent / 100) + aug).floor();
    years += 1;
  } while (population < populationToSurpass);

  return years;
}
