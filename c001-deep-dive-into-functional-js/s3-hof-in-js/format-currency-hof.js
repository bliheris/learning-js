const formatCurrency = (currencySymbol, decimalSeparator) => {
	return (value) => {
		const wholePart = Math.trunc(value / 100)
		let fractionPart = value % 100
		if(fractionPart < 10) {
			fractionPart = '0' + fractionPart
		}
		return `${currencySymbol}${wholePart}${decimalSeparator}${fractionPart}`
	}
}

const formatter = formatCurrency('$', ',')

console.log(formatter(100))

const values = [100, 29, 45, 214]

for (let i = 0; i < values.length; i++) {
	console.log(formatter(values[i]))
}

for (let value of values) {
	console.log(formatter(value))
}

values.forEach(v => console.log(formatter(v)))