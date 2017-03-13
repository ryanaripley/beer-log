import React, { Component } from 'react';
import { Link } from 'react-router';

import BeerGlass from '../components/BeerGlass';
import Stats from '../components/Stats';
import GrainBill from '../components/GrainBill';
import HopSchedule from '../components/HopSchedule';

import { formatDate } from '../helpers';

import sampleRecipes from '../data/sampleRecipes';

class ViewRecipe extends Component {
  constructor() {
    super();

    // Initial state
    this.state = {
      settings: {
        efficiency: .75,
      },
      recipes: sampleRecipes
    }
  }

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
        <br />
        <Link to={`/recipes/${recipeId}/edit`} className="button">Edit recipe</Link>
        <GrainBill recipe={this.state.recipes[recipeId]} />
        <HopSchedule recipe={this.state.recipes[recipeId]} />
      </div>
    );
  }
}

export default ViewRecipe;
