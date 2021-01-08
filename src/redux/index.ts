import {combineReducers} from "redux";
import {countriesReducer} from './countries/reducers'

export const rootReducer = combineReducers({
  countries : countriesReducer
})
// export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;