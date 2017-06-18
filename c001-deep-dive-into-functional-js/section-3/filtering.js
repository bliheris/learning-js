const filter = (arr, predicate) => {
	const reducer = (acc, el) =>
		predicate(el) ? [...acc, el] : acc
	return arr.reduce(reducer, [])
}

console.log(filter([1,2,3,4,5], x => x >= 4))