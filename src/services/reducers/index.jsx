import { combineReducers } from 'redux';
import app from './app';
import search from './search';
import sort from './sort';
import movies from './movies';

export default combineReducers({ app, search, sort, movies });
