import React, { Component } from 'react';
import BeerGlass from '../components/BeerGlass';
import GrainBillEditable from '../components/GrainBillEditable';

import HopSchedule from '../components/HopSchedule';
import AddHopForm from '../components/AddHopForm';

import Stats from '../components/Stats';
import { formatDate } from '../helpers';

import sampleRecipes from '../data/sampleRecipes';

class EditRecipe extends Component {

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

  render() {

    const recipeId = this.props.params.recipeId;
    const recipe = this.props.recipes[recipeId];

    return (
      <div className="edit-recipe">
        <header className="recipe-header">
          <BeerGlass malts={recipe.malts} batchSize={recipe.batchSize} />
          <div className="recipe-title">
            <h1>{recipe.name}</h1>
            <p className="sub-title">
              {recipe.style} | 
              Brewed {formatDate(recipe.brewDate)}
            </p>
          </div>
        </header>
        <Stats recipe={recipe} settings={this.props.settings} />

        <GrainBillEditable recipe={recipe} removeMalt={this.removeMalt} />

        <HopSchedule recipe={recipe} removeHop={this.removeHop} />

        <AddHopForm addHop={this.addHop} />
      </div>
    );
  }
}

export default EditRecipe;
