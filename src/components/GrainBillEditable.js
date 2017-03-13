import React from 'react';

import MaltFormRow from '../components/MaltFormRow';

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
				<div className="edit-malt-group">
			    <div className="form-row form-header">
			      <div title="Weight in lbs.">Lbs.</div>
			      <div>Name</div>
			      <div>SRM</div>
			      <div>OG</div>
			      <div></div>
			    </div>
		    	{
		    		this.props.recipe.malts.map((malt, index) => {
		    			return <MaltFormRow 
		    				key={index} 
		    				details={malt} 
		    				totalWeight={totalWeight}
		    				removeMalt={removeMalt} 
		    			/>;
		    		})
		    	}
		    </div>
			</div>
		);
	}
}

export default GrainBill;