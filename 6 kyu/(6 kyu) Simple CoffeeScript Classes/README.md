# Simple CoffeeScript Classes

Create a class that would allow for the following code to work correctly:

```coffeescript
jon = new Person("Jon")
jon.greet("Jane") # => "Hello Jane, my name is Jon"

# RudePerson should inherit from Person
bill = new RudePerson("Bill")
bill.greet("Jane") # => "I'm Bill, now go away Jane"
```
