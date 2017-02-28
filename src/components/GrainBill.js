import React from 'react';
import Malt from '../components/Malt';
import { objectLength } from '../helpers';

class GrainBill extends React.Component {
	render() {
		let totalWeight = 0;
		if (objectLength(this.props.malts) > 0) {
			totalWeight = Object
				.keys(this.props.malts)
				.reduce((total, key) => {
					console.log(key);
	      	return total + this.props.malts[key].weight;
	    	}, 0);
	  }

	  console.log(totalWeight);
		return (
			<div className="grain-bill">
				<h2>Grain Bill</h2>
				<table className="malt-list">
			    <thead>
			      <tr>
			        <th>Weight</th>
			        <th>Malt</th>
			        <th>%</th>
			        <th></th>
			      </tr>
			    </thead>
			    <tbody>
			    	{
			    		Object
			    			.keys(this.props.malts)
			    			.map(key => <Malt key={key} details={this.props.malts[key]} totalWeight={totalWeight} 
			    								/>)
			    	}
			    </tbody>
			  </table>
			</div>
		);
	}
}

export default GrainBill;