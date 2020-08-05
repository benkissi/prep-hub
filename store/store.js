import thunk from 'redux-thunk';

import {createStore, combineReducers, compose, applyMiddleware } from 'redux'
import questionsReducer from './reducers/questions'
import userReducer from './reducers/user'

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    user: userReducer,
    questions: questionsReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)) )

