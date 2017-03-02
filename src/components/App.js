import React, { Component } from 'react';
import BeerGlass from '../components/BeerGlass';
import GrainBill from '../components/GrainBill';
import AddMaltForm from '../components/AddMaltForm';

// import HopSchedule from '../components/HopSchedule';
import AddHopForm from '../components/AddHopForm';

import Stats from '../components/Stats';
import { formatDate } from '../helpers';

import sampleRecipes from '../data/sampleRecipes';

class App extends Component {
  constructor() {
    super();
    
    this.addMalt = this.addMalt.bind(this);
    this.removeMalt = this.removeMalt.bind(this);
    this.loadSample = this.loadSample.bind(this);

    // Initial state
    this.state = {
      settings: {
        efficiency: .75,
      },
      recipes: sampleRecipes
    }
  }

  addMalt(malt, recipe) {
    // Update state
    const recipes = {...this.state.recipes};
    recipes[recipe].malts.push(malt);
    // Set state
    // To do: figure out a way to update only the recipe changed, 
    // not the entire state.recipes object
    this.setState({ recipes });
  }

  removeMalt(id, recipe) {
    // Update state
    const recipes = {...this.state.recipes};
    const index = recipes[recipe].malts
      .map(malt => malt.id)
      .indexOf(id);
    recipes[recipe].malts.splice(index, 1);
    this.setState({ recipes });
  }

  addHop(hop, recipe) {
    // Update state
    const recipes = {...this.state.recipes};
    recipes[recipe].hops.push(hop);
    // Set state
    // To do: figure out a way to update only the recipe changed, 
    // not the entire state.recipes object
    this.setState({ recipes });
  }

  removeHop(id, recipe) {
    // Update state
    const recipes = {...this.state.recipes};
    const index = recipes[recipe].hops
      .map(hop => hop.id)
      .indexOf(id);
    recipes[recipe].hops.splice(index, 1);
    this.setState({ recipes });
  }

  loadSample = () => {
    this.setState({
      recipes: sampleRecipes
    });
  };

  render() {
    return (
      <div className="site">
        <header className="recipe-header">
          <BeerGlass malts={this.state.recipes.recipe1984.malts} batchSize={this.state.recipes.recipe1984.batchSize} />
          <div className="recipe-title">
            <h1>{this.state.recipes.recipe1984.name}</h1>
            <p className="sub-title">
              {this.state.recipes.recipe1984.style} | 
              Brewed {formatDate(this.state.recipes.recipe1984.brewDate)}
            </p>
          </div>
        </header>
        <Stats recipe={this.state.recipes.recipe1984} settings={this.state.settings} />
        <GrainBill recipe={this.state.recipes.recipe1984} removeMalt={this.removeMalt} />
        <AddMaltForm addMalt={this.addMalt} />
        <AddHopForm addHop={this.addHop} />
        <button onClick={this.loadSample}>Load sample recipe</button>
      </div>
    );
  }
}

export default App;
