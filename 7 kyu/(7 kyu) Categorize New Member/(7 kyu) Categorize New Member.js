function openOrSenior(data){
  return data.map((item) => {
    const [age, handicap] = item;

    if (age >= 55 && handicap > 7) {
      return 'Senior'
    }

    return 'Open'
  })
}
