function isValidWalk(walk) {
  let north = [], south = [], east = [], west = [];

  for (direction of walk) {
    if (direction === 'n') {
      north.push(1);
    }

    if (direction === 's'){
      south.push(1);
    }

    if (direction === 'e'){
      east.push(1);
    }

    if (direction === 'w') {
      west.push(1);
    }
  }

  return walk.length === 10 && north.length === south.length && west.length === east.length;
}
