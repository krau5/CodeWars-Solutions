prefill = (n, v) ->
  if parseInt(n) != Math.abs(n)
    throw new TypeError("#{n} is invalid")

  return if Number(n) then Array(n).fill(v) else []
