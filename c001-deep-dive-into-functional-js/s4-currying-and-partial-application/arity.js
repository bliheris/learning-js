/*
Arity - the number of arguments of function
f(a) unary function arity = 1
f(a, b) binary function arity = 2
f(a, b, c) ternary function arity = 3

f(...args) - variadic functions

 */

console.log( (a => 2*a).length)  // arity 1
const sum = (a, b) => a + b
console.log('Sum arity =', sum.length)
console.log(sum.bind(null, 5).length)

console.log( ((a, b=0) => a+b).length)  //1

const sumArgs = (...args) => args.reduce(sum, 0)
console.log(sumArgs.length) //0
