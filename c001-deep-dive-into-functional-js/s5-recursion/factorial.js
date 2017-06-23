/*

single vs multiple recursion
direct vs indirect recursion

 */

const factorial = num => {
	return num <= 1 ? 1 : num * factorial(num - 1)
}

const factorialAcc = (num, acc = 1) => {
	if(num <= 1) {
		return acc
	}
	return factorialAcc(num - 1, acc * num)
}

console.log(factorial(5));
console.log(factorialAcc(5));



