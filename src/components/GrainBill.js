import React from 'react';
import Malt from '../components/Malt';
import { objectLength } from '../helpers';

class GrainBill extends React.Component {
	render() {
		const removeMalt = this.props.removeMalt;
		let totalWeight = 0;
		if (objectLength(this.props.recipe.malts) > 0) {
			totalWeight = this.props.recipe.malts
				.reduce((total, malt) => {
	      	return total + parseFloat(malt.weight);
	    	}, 0);
	  }
		return (
			<div className="grain-bill">
				<h2>Grain Bill</h2>
				<table className="malt-table">
			    <thead>
			      <tr>
			        <th>Weight</th>
			        <th>Malt</th>
			        <th>%</th>
			      </tr>
			    </thead>
			    <tbody>
			    	{
			    		this.props.recipe.malts.map((malt, index) => {
			    			return <Malt 
			    				key={index} 
			    				details={malt} 
			    				totalWeight={totalWeight}
			    			/>;
			    		})
			    	}
			    </tbody>
			  </table>
			</div>
		);
	}
}

export default GrainBill;