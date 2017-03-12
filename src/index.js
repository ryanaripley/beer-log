import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

import App from './components/App';
import Home from './components/Home';
import Recipes from './components/Recipes';
import Calculators from './components/Calculators';
import Settings from './components/Settings';
import ViewRecipe from './components/ViewRecipe';
import EditRecipe from './components/EditRecipe';
import NotFound from './components/NotFound';

import './css/style.css';

const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App} >
				<IndexRoute component={Home} />
				<Route path="/recipes" component={Recipes} />
		  	<Route path="/recipes/:recipeId" component={ViewRecipe} />
		  	<Route path="/recipes/:recipeId/edit" component={EditRecipe} />
		  	<Route path="/calculators" component={Calculators} />
		  	<Route path="/settings" component={Settings} />
		    <Route path="*" component={NotFound}/>
		  </Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));