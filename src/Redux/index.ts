import nameStore from "./nameStore"
import {combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { logger } from './middleaware';

const store = createStore(combineReducers({store: nameStore}), applyMiddleware(thunk, logger))

export type RootState = ReturnType<typeof store.getState>

export default store

// export default createStore(combineReducers({store}), applyMiddleware(thunk, logger));