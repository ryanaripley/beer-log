import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import recipes from './recipes';
import settings from './settings';

const rootReducer = combineReducers({ recipes, settings, routing: routerReducer });

export default rootReducer;