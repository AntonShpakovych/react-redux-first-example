import {combineReducers} from 'redux'
import ContactReducers from './ContactReducers'
import ActiveContactReducer from './activeContactReducer'
const RootReducers = combineReducers({
    contacts:ContactReducers,
    active:ActiveContactReducer
})

export default RootReducers