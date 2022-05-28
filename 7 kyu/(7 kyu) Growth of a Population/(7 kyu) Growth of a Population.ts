export class G964 {

  public static nbYear = (population, percent, aug, populationToSurpass) => {
    let years = 0;

    do {
      population += ~~(population * (percent / 100) + aug)
      years += 1
    } while (population < populationToSurpass);

    return years;
  }
}
