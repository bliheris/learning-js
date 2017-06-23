class Invoice {

	constructor(invoiceNumber) {
		this.invoiceNumber = invoiceNumber
		this.items = []
	}

	addItem(quantity, price, description) {
		this.items.push({ quantity, price, description })
	}

	get sum() {
		let sum = 0
		for (let i = 0; i < this.items.length; i++) {
			let item = this.items[i]
			sum += item.quantity * item.price
		}
		return sum
	}
}

const invoice1 = new Invoice(1)
const invoice2 = new Invoice(2)

invoice1.addItem(2, 5, 'Item1')
invoice1.addItem(23, 1, 'Item2')

invoice2.addItem(4, 3, 'Item1')
invoice2.addItem(9, 7, 'Item2')

console.log('Invoice1 sum', invoice1.sum)
console.log('Invoice2 sum', invoice2.sum)