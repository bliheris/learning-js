// http://exploringjs.com/es6/ch_classes.html#sec_simple-mixins
// https://gist.github.com/sebmarkbage/fac0830dbb13ccbff596

class Person {
	xxx() {
		console.log('xxx from person')
	}
}

class Employee extends Person {
}

const p1 = new Person()
p1.xxx()

const e1 = new Employee()
e1.xxx()

const Storage = Sup => class extends Sup {
	save (database) {
		console.log('saving', database)
	}
}
const Validation = Sup => class extends Sup {
	validate (schema) {
		console.log('validating', schema)
	}
}

class MixinEmployee extends Storage(Validation(Person)) {

}

const me = new MixinEmployee()
me.xxx()
me.validate('schema')
me.save('database')

function mixins (...mixinFactories) {
	let base = class {
		// componentWillMount () {
		//   console.log('Base component will mount')
		// }
	}
	// TODO: Add all possible method names that might call super()
	// to the base class so that they don't throw.

	mixinFactories.forEach(mixin => {
		base = mixin(base)
	})
	// for (var i = 0; i < mixinFactories.length; i++) {
	//   base = mixinFactories[i](base);
	// }
	return base;
}

var Bar1 = base => class extends base {
	componentWillMount () {
		if (super.componentWillMount) {
			super.componentWillMount()
		}
		console.log('Bar1')
	}
};

var Bar2 = base => class extends base {
	componentWillMount () {
		if (super.componentWillMount) {
			super.componentWillMount()
		}
		console.log('Bar2')
	}
};

class Foo extends mixins(Bar1, Bar2) {
	// componentWillMount() {
	//   console.log('Foo before mixins');
	//   super.componentWillMount();
	//   console.log('Foo after mixins');
	// }
}

const foo = new Foo()
foo.componentWillMount()
