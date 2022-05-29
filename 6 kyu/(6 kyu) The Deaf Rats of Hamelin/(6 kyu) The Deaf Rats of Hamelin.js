var countDeafRats = function(town) {
  if (town !== null) {
    [left,right] = town.split('P');
    var a = left + right.split('').reverse().join('');
    var b = (a.match(/O~|~O/gi) || []).filter(v => v == 'O~').length;

    return b;
  }

  return 0;
}
