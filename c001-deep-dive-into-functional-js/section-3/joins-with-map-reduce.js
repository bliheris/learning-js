const students = [
	{
		id: 1,
		name: 'Marcus',
		birthDate: '1997-10-11',
	},
	{
		id: 2,
		name: 'Andrea',
		birthDate: '1993-05-16',
	},
	{
		id: 3,
		name: 'Max',
		birthDate: '1994-03-07',
	},
]

const tests = [
	{
		id: 1,
		studentId: 1,
		title: 'Fractals',
		score: 0.5
	},
	{
		id: 2,
		studentId: 1,
		title: 'Functional programming',
		score: 0.75
	},
	{
		id: 3,
		studentId: 2,
		title: 'Functional programming',
		score: 0.96
	},
]

const studentTests = tests.map( test => {
	const student = students.find(s => s.id === test.studentId)
	return {
		studentName: student.name,
		testTitle: test.title,
		testScore: test.score,
	}
})

console.log(studentTests)

const studentTestCount = students.map(student => {
	const testsCount = tests.filter(t => t.studentId === student.id).length
	return {
		studentName: student.name,
		testsCount
	}
})

console.log(studentTestCount)