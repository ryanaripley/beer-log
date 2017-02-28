import React from 'react';

class AddMaltForm extends React.Component {
	createMalt(e) {
    e.preventDefault();
    const malt = {
    	name: this.name.value,
			weight: this.weight.value,
			srm: this.srm.value,
			sg: this.sg.value
    };
    this.props.addMalt(malt, "recipe1984");
    this.maltForm.reset();
  }

	render() {
		return (	
			<div>
				<h3>Add malt</h3>
				<form ref={(input) => this.maltForm = input} className="add-malt-form" onSubmit={(e) => this.createMalt(e)}>
			    <input ref={(input) => this.name = input} type="text" name="name" placeholder="Name" required />
			    <input ref={(input) => this.weight = input} type="number" step=".125" name="weight" placeholder="Weight" required />
			    <input ref={(input) => this.srm = input} type="number" step=".125" name="srm" placeholder="SRM" required />
			    <input ref={(input) => this.sg = input} type="number" step="any" name="sg" placeholder="SG" required />
			    <button type="submit" className="button-primary">Add grain</button>
			  </form>
			</div>
		);
	}
}

export default AddMaltForm;