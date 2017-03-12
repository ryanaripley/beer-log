import React from 'react';
import { Link } from 'react-router';

import BeerLogLogo from '../components/BeerLogLogo';
import { IconPerson } from '../components/IconSet';

class SiteHeader extends React.Component {
	render() {
		return (
			<header className="site-header">
			  <Link to="/" className="app-logo">
			   <BeerLogLogo className="site-logo" width="120" height="19" letterFill="#fff" />
			  </Link>
			  <a href="#0">
			  	<IconPerson height="22" width="22" fill="#fff"></IconPerson>
			  </a>
			</header>
		);
	}
}

export default SiteHeader;