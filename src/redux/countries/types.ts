export const SET_COUNTRIES = 'SET_COUNTRIES';

export type CountriesState = {
  items : Array<object>,
  isLoaded: boolean,
};

 interface setCountriesActionType {
  type: typeof SET_COUNTRIES,
  payload: Array<object>
}

export type CountriesActionTypes = setCountriesActionType