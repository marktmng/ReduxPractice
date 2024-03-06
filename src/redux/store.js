import { createStore } from 'redux'
import cakeReducer from './cake/cakeReducer'
// const { createStore } = require('redux');

const store = createStore(cakeReducer)

export default store
