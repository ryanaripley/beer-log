import React, { Component } from 'react';
import BeerGlass from '../components/BeerGlass';
import GrainBill from '../components/GrainBill';
import AddMaltForm from '../components/AddMaltForm';
import Stats from '../components/Stats';
import { formatDate } from '../helpers';

import sampleRecipes from '../data/sampleRecipes';

class App extends Component {
  constructor() {
    super();
    
    this.addMalt = this.addMalt.bind(this);
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
        <GrainBill recipe={this.state.recipes.recipe1984} />
        <AddMaltForm addMalt={this.addMalt} />
        <button onClick={this.loadSample}>Load sample recipe</button>
      </div>
    );
  }
}

export default App;
