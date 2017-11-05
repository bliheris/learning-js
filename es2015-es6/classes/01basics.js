/*
Under the hood, ES6 classes are not something that is radically new:
They mainly provide more convenient syntax to create
old-school constructor functions.
*/

//Class declarations are not hoisted #

class SimpleClass {}

const c = new SimpleClass()
console.log('Type of "class" is', typeof SimpleClass)
console.log('Type of "class instance" is', typeof c)

class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	toString() {
		return `(${this.x}, ${this.y})`;
	}
}

class ColorPoint extends Point {
	constructor(x, y, color) {
		super(x, y);
		this.color = color;
	}
	toString() {
		return super.toString() + ' in ' + this.color;
	}
}

const cp = new ColorPoint(25, 8, 'green');
cp.toString();
console.log(cp instanceof ColorPoint)
console.log(cp instanceof Point)


// class expression
const MyClass = class {}
const inst = new MyClass()

const NamedMyClass = class Me {
	getClassName() {
		return Me.name;
	}
};
const instNamed = new NamedMyClass();
console.log(instNamed.getClassName()); // Me
//console.log(Me.name); // ReferenceError: Me is not defined