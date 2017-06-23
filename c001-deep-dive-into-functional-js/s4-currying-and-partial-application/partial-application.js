/*

Currying creates a chain of unary functions.
Partial application operates with functions of any arity.

 */

const partial =
	(f, ...argList1) =>
		(...argList2) =>
			f(...argList1, ...argList2)


const calculateVolume = (a, b, c) => a * b * c

console.log(partial(calculateVolume, 2, 3)(4));
console.log(partial(calculateVolume, 2)(3, 4));
