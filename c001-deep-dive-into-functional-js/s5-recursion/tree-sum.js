const tree = {
	value: 5,
	left: null,
	right: {
		value: 8,
		left: {
			value: 6,
			left: null,
			right: null
		},
		right: {
			value: 11,
			left: null,
			right: null
		}
	}
}

const sumElements = tree =>
	tree === null ?
		0 : tree.value + sumElements(tree.left) + sumElements(tree.right)

const iterativeSumElements = tree => {
	let sum = 0
	let nodes = [tree]

	while(nodes.length > 0) {
		const node = nodes.pop()
		if( node !== null) {
			sum += node.value
			nodes.push(node.left)
			nodes.push(node.right)
		}
	}

	return sum
}

const tcoSumNodeList = ([head, ...tail], sum) =>
	typeof head === 'undefined' ?
		sum :
		head === null ?
			tcoSumNodeList(tail, sum) :
			tcoSumNodeList(
				[head.left, head.right, ...tail], sum + head.value
			)



console.log(sumElements(tree));
console.log(iterativeSumElements(tree));
console.log(tcoSumNodeList([tree], 0));