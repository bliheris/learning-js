//src: https://vimeo.com/69255635 Classical Inheritance is Obsolete - How to Think in Prototypal OO
/*
3 kinds of prototypes
- delegate prototype, shared methods, you get flyweight objects for free
- cloning/concatenation great for defualt state and mixins
- functional inheritance great for encapsulation and privacy, functional mixins,
 	function prototypes not object prototypes
*/
//old way
function Greeter(name) {
	this.name = name || 'John Doe'
}
Greeter.prototype.hello = function hello() {
	return `Hello my name is ${this.name}`
}
var george = new Greeter('George')
console.log(george.hello())

//new hotness
var proto = {
	hello: function hello() {
		return `Hello my name is ${this.name}`
	}
}
const george2 = Object.create(proto)
george2.name = 'George'
console.log(george2.hello())

// 2nd type, mixin style, properties are copied over
const george3 = Object.assign({}, proto, {name: 'George'})
console.log(george3.hello())

/*
Use factory functions
Like constructors, they return new object
you don't need this or new
mix and match all three types of prototypes
use .call() and .apply() to swap out source prototypes at instantiation time
more dynamic and more flexible
library Stampit
*/

// classes deal with the idea of an object
// prototypes deal with the objects themselves

const test = {}
const testProto = Object.getPrototypeOf(test)
testProto.name = 'Maciek'
console.log(test.name)