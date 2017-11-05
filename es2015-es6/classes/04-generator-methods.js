class IterableArguments {
	constructor(...args) {
		this.args = args;
	}
	* [Symbol.iterator]() {
		for (const arg of this.args) {
			yield arg;
		}
	}
}

for (const x of new IterableArguments('hello', 'world')) {
	console.log(x);
}