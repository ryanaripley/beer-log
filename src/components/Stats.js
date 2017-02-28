import React from 'react';
import { round, calculateSG, calculateFG, calculateABV, calculateSRM } from '../helpers.js';

class Stats extends React.Component {

  calculateSG(malts, batchSize, efficiency = .75) {
    const totalPoints = malts.reduce((total, malt) => {
	      return total + parseFloat(((malt.sg - 1) * efficiency) * malt.weight / batchSize); 
	    }, 0);
    return round((totalPoints + 1), 3);
  };

  calculateFG(sg, attenuation) {
    const fg = (sg - 1) * (1 - attenuation) + 1;
    return round(fg, 3);
  }

  calculateABV(sg, fg) {
    return round((sg - fg) * 131.25, 1);
  }

  calculateSRM(malts, batchSize) {
    // Calculate MCU
    const totalMcu = malts.reduce((total, malt) => {
        const mcu = (malt.srm * malt.weight)/batchSize;
        return total + parseFloat(mcu);
      }, 0);
    // Return SRM adjusted by Morey's Formula
    const moreySRM = (1.4922 * Math.pow(totalMcu, 0.6859));
    return round(moreySRM, 1);
  }; 

	render() {

		const malts = this.props.recipe.malts;
    const hops = this.props.recipe.hops;
    const yeast = this.props.recipe.yeast;
		const batchSize = this.props.recipe.batchSize;
		const efficiency = this.props.settings.efficiency;

    const startingGrav = this.calculateSG(malts, batchSize, efficiency);
    const finalGrav = this.calculateFG(startingGrav, yeast.attenuation);
    const abv = this.calculateABV(startingGrav, finalGrav);
    const srm = this.calculateSRM(malts, batchSize);

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