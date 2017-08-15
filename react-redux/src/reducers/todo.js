const initState = {
	todos: [
		{
			id: 1,
			name: 'Render static UI',
			isComplete: true
		},
		{
			id: 2,
			name: 'Create initial state',
			isComplete: true
		},
		{
			id: 3,
			name: 'Render base on state',
			isComplete: false
		},
	]

}

export default (state = initState, action) => {
	switch(action.type){
		case 'ADD_TODO':
			return {...state, todos: state.todos.concat(action.payload)}
		default:
			return state
	}
}