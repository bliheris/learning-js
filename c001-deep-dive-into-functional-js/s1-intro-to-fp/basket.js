const basket = []

const addElement = (name, price) => {
	basket.push({
		name, price,
	})
}

addElement('biscuits', 10)

console.log(basket)

const deepClone = o => JSON.parse(JSON.stringify(o))

const functionalAddElement = (basket, name, price) => {
	return deepClone(basket).concat({name, price})
}

const basket2 = functionalAddElement(basket, 'item1', 2)
console.log(basket)
console.log(basket2)