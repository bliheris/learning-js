/*
The getter/setter syntax exists for properties that
must be calculated based on other properties,
like the area property from a circle of a given radius:
*/

class Circle {
	constructor (radius) {
		this.radius = radius;
	}
	get area () {
		return Math.PI * this.radius * this.radius;
	}
	set area (n) {
		this.radius = Math.sqrt(n / Math.PI);
	}
}

const circle = new Circle(10)
console.log(circle.area)
circle.area = 100
console.log(circle.area)

class MyClass {
	get prop() {
		return 'getter';
	}
	set prop(value) {
		console.log('setter: '+value);
	}
}

const inst = new MyClass();
inst.prop = 123;
console.log(inst.prop)