const createInvoice = number => {
	return {
		number,
		items: [],
	}
}

function clone(o) {
	return JSON.parse(JSON.stringify(o))
}

function addItem(invoice, quantity, price, description) {
	// const invoiceItems = clone(invoice.items)
	// const newItem = {
	// 	quantity,
	// 	price,
	// 	description,
	// }
	//
	// return {
	// 	number: invoice.number,
	// 	items: [...invoiceItems, newItem],
	// }

	const newInvoice = clone(invoice)
	newInvoice.items.push({
		quantity,
		price,
		description,
	})
	return newInvoice
}

const calculateSum = invoice => {
	const reducer = (acc, item) => {
		return acc + item.quantity * item.price
	}
	return invoice.items.reduce(reducer, 0)
}

