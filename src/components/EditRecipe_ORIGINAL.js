import React from 'react';
import Autocomplete from 'react-autocomplete';
import maltList from '../data/maltList';

class MaltFormRow extends React.Component {

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

	createMalt(e) {
		console.log(this);
    e.preventDefault();
    const malt = {
    	name: this.state.name,
    	weight: this.weight.value,
			srm: this.srm.value,
			sg: this.sg.value
    };
    this.props.addMalt(malt, "recipe1984");
    this.maltForm.reset();
    this.resetState();
  }

  matchStateToTerm(state, value) {
	  return (
	    state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
	    state.country.toLowerCase().indexOf(value.toLowerCase()) !== -1
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
		const selectedMalt = maltList.find(malt => malt.name === value);
		this.sg.value = selectedMalt.sg;
		this.srm.value = selectedMalt.srm;
    // Update state
    this.setState({ 
    	name: selectedMalt.name,
    	srm: selectedMalt.srm,
    	sg: selectedMalt.sg,
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
			<form 
				ref={(input) => this.maltForm = input} 
				className="form-row" 
				onSubmit={(e) => this.createMalt(e)}
			>
				<input 
		    	ref={(input) => this.weight = input} 
		    	type="number" 
		    	step=".125" 
		    	name="weight" 
		    	placeholder="Weight"
		    	min=".125"
		    	required 
		    />
		    <Autocomplete
          className="autocomplete-input"
          value={this.state.name}
          inputProps={{
          	name: "name", 
          	id: "malts-autocomplete",
          	placeholder: "Name",
          	required: true,
          }}
          items={maltList}
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
		    	ref={(input) => this.srm = input} 
		    	type="number" 
		    	step="1" 
		    	name="srm"
		    	placeholder="SRM"
		    	min="0" max="550"
		    	required 
		    />
		    <input 
		    	ref={(input) => this.sg = input} 
		    	type="number" 
		    	step=".001" 
		    	name="sg" 
		    	placeholder="SG" 
		    	min="0" max="2" 
		    	required 
		    />
		    <button type="submit" className="button-primary">X</button>
		  </form>
		);
	}
}

export default MaltFormRow;