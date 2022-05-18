class Person
  constructor: (@name) ->

  greet: (name) -> "Hello #{name}, my name is #{@name}"

class RudePerson extends Person
  greet: (name) -> "I'm #{@name}, now go away #{name}"
