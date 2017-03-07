import React from 'react';

class App extends React.Component {

	render() {
		return (
			<div className="site">
				<p>This is the homepage</p>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		);
	}
}

export default App;