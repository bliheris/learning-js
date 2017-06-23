const memo = f => {
	let memoMap = new Map()

	return fArg =>
		memoMap.has(fArg) ?
			memoMap.get(fArg) :
			memoMap.set(fArg, f(fArg)).get(fArg)
}

const factorial = num => {
	return num <= 1 ? 1 : num * factorial(num - 1)
}

const memoizedFactorial = memo(factorial)

console.log(memoizedFactorial(10));
console.log(memoizedFactorial(11));