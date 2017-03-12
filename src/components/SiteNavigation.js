import React from 'react';
import { Link } from 'react-router';

import { IconHome, IconList, IconCalculator, IconCog } from '../components/IconSet';

class SiteNavigation extends React.Component {
	render() {
		const iconSize = 22;

		return (
			<nav className="site-navigation">
				<ul>
					<li>
						<Link to="/">
							<IconHome width={iconSize} height={iconSize} fill="#fff"></IconHome>
							<div>Home</div>
						</Link>
					</li>

					<li>
						<Link to="/recipes">
							<IconList width={iconSize} height={iconSize} fill="#fff"></IconList>
							<div>Recipes</div>
						</Link>
					</li>

					<li>
						<Link to="/calculators">
							<IconCalculator width={iconSize} height={iconSize} fill="#fff"></IconCalculator>
							<div>Calculators</div>
						</Link>
					</li>

					<li>
						<Link to="/settings">
							<IconCog width={iconSize} height={iconSize} fill="#fff"></IconCog>
							<div>Settings</div>
						</Link>
					</li>
				</ul>

			</nav>
		);
	}
}

export default SiteNavigation;