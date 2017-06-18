const nodeList = [5,2,4]

const reducer = (tree, el) => {
	if(tree === null) {
		return {
			value: el,
			left: null,
			right: null,
		}
	}

	if(el < tree.value) {
		tree.left = reducer(tree.left, el)
	}else {
		tree.right = reducer(tree.right, el)
	}

	return tree
}

const tree = nodeList.reduce(reducer, null)

console.log(tree)