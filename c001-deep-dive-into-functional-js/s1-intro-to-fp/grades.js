const gradeTests = tests => {
	const avg = calculateAvg(tests)
	return mapScoresToGrades(tests, avg)
}

const calculateAvg = tests => {
	return tests.reduce((acc, elem) => {
		return acc + elem
	}, 0) / tests.length
}

const mapScoresToGrades = (tests, avg) => {
	const gradeTest = testScore => {
		return testScore >= avg ? 'A' : 'F'
	}

	return tests.map(gradeTest)

	// if(tests.length === 0) {
	// 	return []
	// }
	//
	// const head = tests[0]
	// const tail = tests.slice(1)
	//
	// return [ head >= avg ? 'A' : 'F'].concat(mapScoresToGrades(tail, avg))
}