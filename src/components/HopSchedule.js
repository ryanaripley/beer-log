import React from 'react';
import Hop from '../components/Hop';

class HopSchedule extends React.Component {
	render() {  
      
        const removeHop = this.props.removeHop;
		return (
			<div className="hop-schedule">
				<h2>Hop schedule</h2>
				<table className="hop-table">
			    <thead>
			      <tr>
			        <th>Weight</th>
			        <th>Hop</th>
			        <th>Boil time</th>
			      </tr>
			    </thead>
			    <tbody>
			    	{
			    		this.props.recipe.hops.map((hop, index) => {
			    			return <Hop 
			    				key={index} 
			    				details={hop} 
			    			/>;
			    		})
			    	}
			    </tbody>
			  </table>
			</div>
		);
	}
}

export default HopSchedule;