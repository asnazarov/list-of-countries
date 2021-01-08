import {CountriesActionTypes, CountriesState, SET_COUNTRIES} from "./types";
import { useSelector, TypedUseSelectorHook } from 'react-redux'
interface RootState {
  countries: CountriesState
}
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const initialState: CountriesState = {
  items: [],
  isLoaded: false
}

export const countriesReducer = (state: CountriesState = initialState, action: CountriesActionTypes) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        items: action.payload
      }
  }
  return state
}

