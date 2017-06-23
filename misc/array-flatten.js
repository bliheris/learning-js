const flatten = (arr) => {

	if( ! Array.isArray(arr)) {
		return []
	}

	const reducer = (acc, el) => {
		if(Array.isArray(el)){
			return acc.concat(flatten(el))
		}
		return acc.concat(el)
	}

	return arr.reduce(reducer, [])
}

const arr = [[1,2, [3,4] ,5], [6,[7,[8]]]]
console.log(flatten([]))
console.log(flatten(null))
console.log(flatten(undefined))
console.log(flatten({}))
console.log(flatten(arr))
console.log(flatten([1,2,[3, null], [[undefined]]]))