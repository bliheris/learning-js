import reducer from './todo'

describe('Todo reducer', () => {
	test('returns a state object', () => {
		const result = reducer(undefined, {TYPE: 'ANYTHING'})
		expect(result).toBeDefined()
	})
})