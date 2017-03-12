import React from 'react';

import SiteHeader from '../components/SiteHeader';
import SiteNavigation from '../components/SiteNavigation';

class Main extends React.Component {

	render() {
		return (
			<div className="site">
				<SiteHeader></SiteHeader>
				<SiteNavigation></SiteNavigation>
				<main className="site-main">
					{React.cloneElement(this.props.children, this.props)}
				</main>
			</div>
		);
	}
}

export default Main;