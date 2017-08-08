import React from 'react'

const Gists = ({ gists }) => (
	<ul>
		{gists.map(gist => (
			<li key={gist.id}>{gist.description}</li>
		))}
	</ul>
)

Gists.propTypes = {
	gists: React.PropTypes.array,
}

export default Gists