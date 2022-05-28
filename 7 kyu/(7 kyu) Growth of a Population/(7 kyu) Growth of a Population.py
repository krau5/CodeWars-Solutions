import math

def nb_year(population, percent, aug, populationToSurpass):
    years = 0

    while population < populationToSurpass:
        population += math.floor(population * (percent / 100) + aug)
        years += 1

    return years
