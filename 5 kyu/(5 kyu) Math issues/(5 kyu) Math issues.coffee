Math.round = (number) -> if number % 1 >= 0.5 then ~~number + 1 else ~~number

Math.ceil = (number) -> if Number.isInteger(number) then number else ~~number + 1

Math.floor = (number) -> ~~number
