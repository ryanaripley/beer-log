import React from 'react';
import { Link } from 'react-router';

import SiteHeader from '../components/SiteHeader';

class Main extends React.Component {

	render() {
		return (
			<div className="site">
				<SiteHeader></SiteHeader>
				<p>
					<Link to="/">Home</Link> | <Link to="/recipes">Recipes</Link>
				</p><br />
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
}

export default Main;