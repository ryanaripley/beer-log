import React from 'react';
import { calculateSRM } from '../helpers';

class BeerGlass extends React.Component {
	render() {
		const srmColors = ['#FFFFFF','#f7f2a8','#fdff99','#f7f667','#eddc28','#E0D01B','#D5BC26','#CDAA37','#C1963C','#BE8C3A','#BE823A','#C17A37','#BF7138','#BC6733','#B26033','#A85839','#985336','#8D4C32','#7C452D','#6B3A1E','#5D341A','#4E2A0C','#4A2727','#361F1B','#261716','#231716','#19100F','#16100F','#120D0C','#100B0A','#050B0A'];
		const srm = calculateSRM(this.props.malts, this.props.batchSize);
		const fillColor = srmColors[parseInt(srm)];
		console.log(fillColor);

		return (

			<div className="beer-glass">
		    <svg id="svg4328" height="481.52mm" width="238.75mm" viewBox="0 0 845.95165 1706.1866">
		    <defs id="defs4330">
		      <linearGradient id="linearGradient4911" y2="1026.6" gradientUnits="userSpaceOnUse" x2="197.14" gradientTransform="matrix(1.1039 0 0 1.0431 -55.386 -37.736)" y1="1023.8" x1="874.29">
		       <stop id="stop4907" stopColor="#fff" stopOpacity=".134" offset="0"/>
		       <stop id="stop4913" stopColor="#fff" stopOpacity="0" offset=".48946"/>
		       <stop id="stop4909" stopColor="#fff" stopOpacity=".134" offset="1"/>
		      </linearGradient>
		    </defs>
		    <g id="layer1" transform="translate(-107.2 6.5663)">
		    <g id="g5025">
		     <g id="g4915" transform="translate(12.86 -16)" stroke="#c5c5c5" strokeWidth="5">
		      <path id="rect4876" opacity="0.42" strokeLinejoin="round" d="m426.42-0.56639h187.51c179.06 0 324.25 25.945 323.21 58.076l-51.83 1601c-1.0404 32.132-82.315 35.11-261.38 35.11h-187.51c-179.06 0-255.86-8.7429-257.39-40.852l-75.82-1595.2c-1.53-32.099 144.15-58.066 323.21-58.066z" stroke="#c5c5c5" strokeWidth="5" fill="#d7eef4"/>
		     </g>
		     <g id="g4971" transform="translate(2.8571)">
		      <path id="beer-color" d="m441.71 104.66h176.16c168.23 0 305 23.341 304.05 52.233l-47.37 1439.9c-0.95047 28.893-77.099 31.578-245.33 31.578h-176.16c-168.23 0-240.63-7.8553-242.09-36.742l-72.53-1434.8c-1.4604-28.886 135.04-52.233 303.27-52.233z" fill={fillColor} />
		      <path id="path4886" d="m441.16 56.092c-169.27 0-306.62 23.346-305.15 52.232l2.4054 47.293c18.917-25.569 147.37-45.24 302.74-45.24h177.26c158.09 0 288.55 20.36 304.32 46.586l1.6095-48.639c0.95-28.888-136.67-52.228-305.93-52.228h-177.26z" fill="#ffe6d5"/>
		     </g>
		     <path id="path4903" d="m443.92 101.23h177.45c169.45 0 307.22 23.432 306.26 52.439l-47.71 1445.6c-0.95742 29.006-77.662 31.702-247.11 31.702h-177.45c-169.45 0-242.38-7.8862-243.85-36.886l-73.07-1440.4c-1.471-29 136.03-52.439 305.48-52.439z" fill="url(#linearGradient4911)"/>
		    </g>
		    </g>
		    </svg>
		  </div>


		);
	}
}

export default BeerGlass;