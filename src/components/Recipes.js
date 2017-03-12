import React from 'react';
import { Link } from 'react-router';

class Recipes extends React.Component {

	render() {
		const recipes = this.props.recipes;
		return (
			<section className="section-recipes">
				<h2>Recipes</h2>
				<ul>
					{
						Object
							.keys(this.props.recipes)
							.map((key, i) => {
								const recipe = recipes[key];
								return <li key={key}><Link to={`/recipes/${key}`}>{recipe.name}</Link></li>
							})
					}
				</ul>
			</section>
		);
	}
}

export default Recipes;