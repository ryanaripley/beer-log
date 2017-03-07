import React, { Component } from 'react';
import BeerGlass from '../components/BeerGlass';
import GrainBill from '../components/GrainBill';
import AddMaltForm from '../components/AddMaltForm';

import HopSchedule from '../components/HopSchedule';
import AddHopForm from '../components/AddHopForm';

import Stats from '../components/Stats';
import { formatDate } from '../helpers';

import sampleRecipes from '../data/sampleRecipes';

class EditRecipe extends Component {
  constructor() {
    super();
    
    this.addMalt = this.addMalt.bind(this);
    this.removeMalt = this.removeMalt.bind(this);
    this.addHop = this.addHop.bind(this);
    this.removeHop = this.removeHop.bind(this);
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

    const recipeId = this.props.params.recipeId;

    return (
      <div className="edit-recipe">
        <header className="recipe-header">
          <BeerGlass malts={this.state.recipes[recipeId].malts} batchSize={this.state.recipes[recipeId].batchSize} />
          <div className="recipe-title">
            <h1>{this.state.recipes[recipeId].name}</h1>
            <p className="sub-title">
              {this.state.recipes[recipeId].style} | 
              Brewed {formatDate(this.state.recipes[recipeId].brewDate)}
            </p>
          </div>
        </header>
        <Stats recipe={this.state.recipes[recipeId]} settings={this.state.settings} />
        <GrainBill recipe={this.state.recipes[recipeId]} removeMalt={this.removeMalt} />
        <AddMaltForm addMalt={this.addMalt} />
        <HopSchedule recipe={this.state.recipes[recipeId]} removeHop={this.removeHop} />
        <AddHopForm addHop={this.addHop} />
        <button onClick={this.loadSample}>Load sample recipe</button>
      </div>
    );
  }
}

export default EditRecipe;
