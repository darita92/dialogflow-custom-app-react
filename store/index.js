import { createStore, combineReducers } from 'redux'
import { settings } from './reducers'

const rootReducer = combineReducers({
  settings
})

export default (initialState, options) => {
    return createStore(rootReducer, initialState);
}
