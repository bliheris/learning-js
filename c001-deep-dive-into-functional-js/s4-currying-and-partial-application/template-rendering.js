const courses = [
	{
		title: 'Course 1',
		author: 'MB',
		sections: 6,
	},
	{
		title: 'Course 2',
		author: 'MB',
		sections: 5,
	},
	{
		title: 'Course 3',
		author: 'MB',
		sections: 5,
	},
]

const getTemplate = ({courses}) => {
	const headerTemplate = `
<tr>
	<th>Title</th>
	<th>Author</th>
	<th>Sections</th>
</tr>
`

	const rowTemplate = courses.map(course => `
<tr>
	<th>${course.title}</th>
	<th>${course.author}</th>
	<th>${course.sections}</th>
</tr>
`).join('')

	return `
<table>
	<thead>${headerTemplate}</thead>
	<tbody>${rowTemplate}</tbody>
</table>
`
}

const insertTemplate = (domNode, getTemplate, templateData) => {
	domNode.innerHTML = getTemplate(templateData)
}
