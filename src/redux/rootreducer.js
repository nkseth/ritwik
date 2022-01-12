import { combineReducers } from "redux";
import data from './slices/data'
const rootReducer=combineReducers({data})

export {rootReducer}