def get_even_numbers(array)
  return array.select {|num| num.even? }
end
