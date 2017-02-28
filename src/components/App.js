import React, { Component } from 'react';
import GrainBill from '../components/GrainBill';
import AddMaltForm from '../components/AddMaltForm';
import sampleMalts from '../data/sampleMalts';

class App extends Component {
  constructor() {
    super();
    
    this.addMalt = this.addMalt.bind(this);
    this.loadSample = this.loadSample.bind(this);

    // Initial state
    this.state = {
      settings: {
        efficiency: .75,
        batchSize: 5
      },
      malts: {},
      hops: {}
    }
  }

  addMalt(malt) {
    // Update state
    const malts = {...this.state.malts};
    const timestamp = Date.now();
    malts[`malt-${timestamp}`] = malt;
    // Set state
    this.setState({ malts });
  }

  loadSample = () => {
    this.setState({
      malts: sampleMalts
    });
  };

  render() {
    return (
      <div className="site">
        <h1>Oatmeal Stout</h1>
        <p className="sub-title">Brewed September 16, 2016</p>
        <div className="stats">
          <div className="stat">
            <h3>1.059</h3>
            <p className="sub-title">OG</p>
          </div>
        </div>
        <GrainBill malts={this.state.malts} />
        <AddMaltForm addMalt={this.addMalt} />
        <button onClick={this.loadSample}>Load sample recipe</button>
      </div>
    );
  }
}

export default App;
