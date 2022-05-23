function prefill(n, v) {
  if (parseInt(n) !== Math.abs(n)) {
    throw new TypeError(`${n} is invalid`)
  }

  return Number(n) ? Array(n).fill(v) : [];
}
