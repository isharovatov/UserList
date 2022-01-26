import store from "./nameStore"
import {combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { logger } from './middleaware';

export default createStore(combineReducers({store}), applyMiddleware(thunk, logger));