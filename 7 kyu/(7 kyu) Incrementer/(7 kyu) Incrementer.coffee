incrementer = (nums) ->
  return (nums.map (num, index) -> num + index + 1).map (num) -> if num.toString().length > 1 then Number(num.toString().slice(-1)) else num
