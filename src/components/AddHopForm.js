import React from 'react';
import Autocomplete from 'react-autocomplete';
import hopList from '../data/hopList';

class AddHopForm extends React.Component {

	constructor() {
		super();
    this.state = {
    	name: ""
    }
  }

  resetState() {
		this.setState({ 
    	name: "",
    });
	}

	createHop(e) {
		console.log(this);
    e.preventDefault();
    const hop = {
    	name: this.state.name,
    	weight: this.weight.value,
			boilTime: this.boilTime.value,
			alpha: this.alpha.value
    };
    this.props.addHop(hop, "recipe1984");
    this.hopForm.reset();
    this.resetState();
  }

  matchStateToTerm(state, value) {
	  return (
	    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
	  )
	}

	/**
	 * An example of how to implement a relevancy-based sorting method. States are
	 * sorted based on the location of the match - For example, a search for "or"
	 * will return "Oregon" before "North Carolina" even though "North Carolina"
	 * would normally sort above Oregon. Strings where the match is in the same
	 * location (or there is no match) will be sorted alphabetically - For example,
	 * a search for "or" would return "North Carolina" above "North Dakota".
	 */
	sortStates(a, b, value) {
	  const aLower = a.name.toLowerCase();
	  const bLower = b.name.toLowerCase();
	  const valueLower = value.toLowerCase();
	  const queryPosA = aLower.indexOf(valueLower);
	  const queryPosB = bLower.indexOf(valueLower);
	  if (queryPosA !== queryPosB) {
	    return queryPosA - queryPosB;
	  }
	  return aLower < bLower ? -1 : 1;
	}

	handleSelect(value) {
		const selectedHop = hopList.find(hop => hop.name === value);
		this.alpha.value = selectedHop.alpha;
    // Update state
    this.setState({ 
    	name: selectedHop.name,
    	alpha: selectedHop.alpha
    });
  }

	render() {

		let styles = {
		  item: {
		    padding: '2px 6px',
		    cursor: 'default'
		  },

		  highlightedItem: {
		    color: 'white',
		    background: 'hsl(200, 50%, 50%)',
		    padding: '2px 6px',
		    cursor: 'default'
		  },

		  menu: {
		    border: 'solid 1px #ccc'
		  }
		};

		return (	
			<div>
				<h3>Add hop</h3>
				<form 
					ref={(input) => this.hopForm = input} 
					className="add-hop-form" 
					onSubmit={(e) => this.createHop(e)}
				>
			    <Autocomplete
	          className="autocomplete-input"
	          value={this.state.name}
	          inputProps={{
	          	name: "name", 
	          	id: "hops-autocomplete",
	          	placeholder: "Name",
	          	required: true,
	          }}
	          items={hopList}
	          getItemValue={(item) => item.name}
	          shouldItemRender={this.matchStateToTerm}
	          sortItems={this.sortStates}
	          onChange={(event, value) => this.setState({ name: value })}
	          onSelect={value => this.handleSelect(value)}
	          renderItem={(item, isHighlighted) => (
	            <div
	              style={isHighlighted ? styles.highlightedItem : styles.item}
	              key={item.id}
	            >{item.name}</div>
	          )}
	        />
			    <input 
			    	ref={(input) => this.weight = input} 
			    	type="number" 
			    	step=".1" 
			    	name="weight" 
			    	placeholder="Weight"
			    	min="0"
			    	required 
			    />
			    <input 
			    	ref={(input) => this.boilTime = input} 
			    	type="number" 
			    	step="1" 
			    	name="srm"
			    	placeholder="Boil time"
			    	min="0" max="120"
			    	required 
			    />
			    <input 
			    	ref={(input) => this.alpha = input} 
			    	type="number" 
			    	step=".01" 
			    	name="sg" 
			    	placeholder="Alpha acid" 
			    	min="0"
			    	required 
			    />
			    <button type="submit" className="button-primary">Add hop</button>
			  </form>
			</div>
		);
	}
}

export default AddHopForm;