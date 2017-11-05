class Foo {
	//pseudo method constructor
	constructor(prop) {
		this.prop = prop;
	}
	/*
	Second, static methods. Static properties (or class properties)
	are properties of Foo itself.
	If you prefix a method definition with static, you create a class method:
	*/
	static staticMethod() {
		return 'classy';
	}
	/*
	Third, prototype methods. The prototype properties of Foo are
	the properties of Foo.prototype.
	They are usually methods and inherited by instances of Foo.
	*/
	prototypeMethod() {
		return 'prototypical';
	}
}
const foo = new Foo(123);

/*
First, the pseudo-method constructor.
This method is special, as it defines the function that represents the class:
*/
console.log(Foo === Foo.prototype.constructor)
console.log(Foo.staticMethod())
console.log('Type of prototypeMethod:', typeof Foo.prototype.prototypeMethod)
console.log(foo.prototypeMethod())


