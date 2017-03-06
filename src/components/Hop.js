import React from 'react';

class Hop extends React.Component {

	render() {
		const { details } = this.props;
		return (
			<tr>
        <td>{details.weight} oz.</td>
        <td>{details.name} ({details.alpha}% AA)</td>
        <td>{details.boilTime} min.</td>
        <td><button onClick={() => this.props.removeHop(details.id, "recipe1984")}>&times;</button></td>
      </tr>
		);
	}
}

export default Hop;