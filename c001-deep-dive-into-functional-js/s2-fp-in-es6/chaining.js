const arr = ['Functional', 'programming', 'is', 'cool']

const result = arr
	.map(word => word.length)
	.filter(num => num % 2 === 0)
	.reduce((a, b) => a + b, 0)

console.log(result)

const elevator = {
	floor: 5,
	up() {
		this.floor += 1
		return this
	},
	down() {
		this.floor -= 1
		return this
	},
}

const newFloor = elevator.up().up().down().up().floor
console.log(newFloor)

const fElevator = {
	floor: 5
}

const up = elevator => {
	return {
		floor: elevator.floor + 1
	}
}

const down = elevator => {
	return {
		floor: elevator.floor - 1
	}
}

const sequence2 = (f1, f2) => (...args) => f2(f1(...args))

const sequ = (f1, ...fRest) => fRest.reduce(sequence2, f1)

const sequence = (...funs) => x => {
	const reducer = (a, el) => el(a)
	return funs.reduce(reducer, x)
}

const fnewFloor = up(down(up(up(fElevator)))).floor
console.log(fnewFloor)

const move = sequ(up, up, down, up)
console.log('Sequence', move(fElevator).floor)

const f1 = (a, b) => a + b
const f2 = a => `Result ${a}`

console.log(sequence2(f1, f2)(2,3))