// The rest operator is used to pass a variable number of arguments to a function,
//  * and it has to be the last one in the arguments list. If the name of the function
//  * argument starts with the three dots (...), the function will get the rest of the
//  * arguments in an array.
//  *
//  * The spread operator is also represented by three dots (...) like the
//  * rest operator, but the spread operator do the opposite: turns an array into
//  * a list of values or function parameters.

// Rest operator example
function student (name, age, ...moreArguments) {
  console.log(name)
  console.log(age)
  console.log(moreArguments)
}

student('Akpevwen', '23', 'JavaScript', 'ES6', 'Homework', 'Learner')

// Spread operator example
var array1 = [0, 1, 2]
var array2 = [3, 4, 5]

const arraySpread = [...array1, ...array2]
console.log(arraySpread)

function sum (x, y, z) {
  return x + y + z
}
const numbers = [1, 2, 3]
console.log(sum(...numbers))
