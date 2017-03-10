import React, { Component } from 'react';
import BeerGlass from '../components/BeerGlass';
import Stats from '../components/Stats';
import GrainBill from '../components/GrainBill';
import HopSchedule from '../components/HopSchedule';

import { formatDate } from '../helpers';

import sampleRecipes from '../data/sampleRecipes';

class ViewRecipe extends Component {
  constructor() {
    super();

    this.editRecipe = this.editRecipe.bind(this);    

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

  editRecipe = () => {
    console.log("this is where we'd go to the edit view");
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
        <button onClick={this.editRecipe}>Edit recipe</button>
        <GrainBill recipe={this.state.recipes[recipeId]} removeMalt={this.removeMalt} />
        <HopSchedule recipe={this.state.recipes[recipeId]} removeHop={this.removeHop} />
      </div>
    );
  }
}

export default ViewRecipe;
