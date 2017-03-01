import React from 'react';
import { calculateSG, calculateFG, calculateABV, calculateSRM } from '../helpers.js';

class Stats extends React.Component {

	render() {

		const malts = this.props.recipe.malts;
    // const hops = this.props.recipe.hops;
    const yeast = this.props.recipe.yeast;
		const batchSize = this.props.recipe.batchSize;
		const efficiency = this.props.settings.efficiency;

    const startingGrav = calculateSG(malts, batchSize, efficiency);
    const finalGrav = calculateFG(startingGrav, yeast.attenuation);
    const abv = calculateABV(startingGrav, finalGrav);
    const srm = calculateSRM(malts, batchSize);

		return (
			<div className="stats">
        <div className="stat">
          <h3>{startingGrav}</h3>
          <p className="sub-title">OG</p>
        </div>
        <div className="stat">
          <h3>{finalGrav}</h3>
          <p className="sub-title">FG</p>
        </div>
        <div className="stat">
          <h3>{abv}%</h3>
          <p className="sub-title">ABV</p>
        </div>
        <div className="stat">
          <h3>{srm}</h3>
          <p className="sub-title">SRM</p>
        </div>
      </div>
		);
	}
}

export default Stats;