/*

Currying - transforms a function with multiple arguments to a chain of function
applications with one argument each

f = (a,b) => value becomes f = a => b => value

 */

const f = (a, b) => a * b
console.log(f(2, 4));

const fCurried = a => b => a * b
const g = fCurried(2)
console.log(g(4));
console.log(fCurried(2)(4));

const getGradeTest =
	average =>
		testScore =>
			testScore >= average ? 'A' : 'F'

const tester = getGradeTest(0.8)
console.log(tester(0.79));
console.log(tester(0.81));