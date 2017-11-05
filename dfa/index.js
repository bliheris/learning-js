const machine = {
	idle: {
		CLICK: 'loading',
	},
	loading: {
		RESOLVE: 'goat',
		REJECT: 'error',
	},
	goat: {
		CLICK: 'loading',
	},
	error: {
		CLICK: 'loading',
	},
}

const initialState = 'idle'

const transition = (state, action) => {
	return machine[state][action]
}

const t = (m,s,a) => m[s][a]

let state = {
	goatState: initialState,
	goat: undefined,
}


const fetchGoat = () => {
	fetch('/url/to/goat')
		.then(goat => {
			this.setState({
				goat: goat
			}, this.transition2('RESOLVE'))
		})
		.catch(_ => this.transition2('REJECT'))
}

//commands have side effects
let commands = {
	loading: this.fetchGoat
}

const transition2 = action => {
	const { goatState } = this.state
	const nextState = machine[goatState][action]
	const command = this.commands[nextState]

	//set state then exec command
	this.setState({
		goatState: nextState
	}, command)
}