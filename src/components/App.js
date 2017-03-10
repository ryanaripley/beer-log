import React from 'react';

class App extends React.Component {

	render() {
		return (
			<div className="site">
				<p>
					<a href="/">Home</a> | <a href="/recipes">Recipes</a>
				</p><br />
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
}

export default App;