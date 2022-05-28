function nbYear($population, $percent, $aug, $populationToSurpass) {
  $years = 0;

  do {
    $population += floor($population * ($percent / 100) + $aug);
    $years += 1;
  } while ($population < $populationToSurpass);

  return $years;
}
