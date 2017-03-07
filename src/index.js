import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App';
import FooBar from './components/FooBar';
import Recipes from './components/Recipes';
import EditRecipe from './components/EditRecipe';
import NotFound from './components/NotFound';

import './css/style.css';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App} >
			<IndexRoute component={FooBar} />
			<Route path="/recipes" component={Recipes} />
    	<Route path="/recipes/:recipeId" component={EditRecipe} />
      <Route path="*" component={NotFound}/>
    </Route>
	</Router>
)

render(router, document.getElementById('root'));