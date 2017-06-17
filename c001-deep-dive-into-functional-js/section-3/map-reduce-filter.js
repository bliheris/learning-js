const map = ([head, ...tail], f) => {
	return typeof head === 'undefined' ? [] :
		[f(head), ...map(tail, f)]
}

const reduce = ([head, ...tail], f, accumulator) => {
	return typeof head === 'undefined' ? accumulator :
		reduce(tail, f, f(accumulator, head))
}

const filter = ([head, ...tail], predicate) => {
	return typeof head === 'undefined' ? [] :
		predicate(head) ?
			[head, ...filter(tail, predicate)] :
			filter(tail, predicate)
}


const square = x =>  x * x
const sum = (a, b) => a + b

const arr = [1,2,3,4]

console.log(arr.map(square))

console.log(map(arr, square).reduce(sum, 0))

console.log(reduce(map(arr, square), sum, 0))

console.log(filter([1,2,3,4,5], x => x%2 === 1))