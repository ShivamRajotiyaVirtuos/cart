import {combineReducers} from 'redux'
import wishItems from './reducer'

const rootReducer =  combineReducers({
    wishItems,
})
export default rootReducer;