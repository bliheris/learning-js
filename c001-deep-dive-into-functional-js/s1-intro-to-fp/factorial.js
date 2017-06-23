const imperativeFactorial = number => {
	let result = 1
	while(number > 1) {
		result *= number
		number -= 1
	}
	return result
}

const declarativeFactorial = num => {
	return num <= 1 ? 1 : num * declarativeFactorial(num - 1)
}

const a = 10
console.log(imperativeFactorial(a))
console.log(declarativeFactorial(a))