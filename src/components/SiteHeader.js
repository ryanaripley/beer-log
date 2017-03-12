import React from 'react';

import BeerLogLogo from '../components/BeerLogLogo';
import { IconPerson } from '../components/IconSet';

class SiteHeader extends React.Component {
	render() {
		return (
			<header className="site-header">
			  <a href="#0" className="app-logo">
			   <BeerLogLogo className="site-logo" width="120" height="19" letterFill="#fff" />
			  </a>
			  <a href="#0">
			  	<IconPerson height="22" width="22" fill="#fff"></IconPerson>
			  </a>
			</header>
		);
	}
}

export default SiteHeader;