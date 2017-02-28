import React from 'react';
import { round } from '../helpers';

class Ingredient extends React.Component {
	render() {
		const { details } = this.props;
		const percentage = round((details.weight / this.props.totalWeight)*100, 0);
		return (
			<tr>
        <td>{details.weight} lbs.</td>
        <td>{details.name}</td>
        <td>{percentage}%</td>
        <td><button>&times;</button></td>
      </tr>
		);
	}
}

export default Ingredient;