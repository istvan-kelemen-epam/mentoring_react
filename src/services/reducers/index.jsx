import { combineReducers } from 'redux';
import search from './search';
import sort from './sort';
import movies from './movies';

export default combineReducers({ search, sort, movies });
