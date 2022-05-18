# CoffeeScript Comprehensions

https://www.codewars.com/kata/coffeescript-comprehensions

CoffeeScript includes the ability to loop over arrays and perform each/select/map type behavior. It provides this without the need to use an external library such as underscore.js.

Utilize the comprehension syntax in the following exercise. The findFirstNames(data, lastNameLength) method needs to be completed so that it will return the first names of people who have a last name with a string length equivalent to the lastNameLength argument.

The following is an example dataset:

```coffeescript
people = [
  {firstName: 'Bill', lastName: 'Gates'},
  {firstName: 'Steve', lastName: 'Jobs'},
  {firstName: 'Brendan', lastName: 'Eich'},
  {firstName: 'Yukihiro', lastName: 'Matsumoto'},
  {firstName: 'Jeremy', lastName: 'Ashkenas'}
]
```

The method would be called like the following:

```coffeescript
firstNames = findFirstNames(people, 4)
# firstNames would == ['Steve', 'Brendan']
```
