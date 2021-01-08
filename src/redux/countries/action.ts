import axios from "axios";
import {CountriesActionTypes, SET_COUNTRIES} from "./types";

//@ts-ignore
export const fetchCountries = (): void => (dispatch: any) => {

  axios.get(`https://restcountries.eu/rest/v2/all `)
    .then(({data}) => {
        dispatch(setCountries(data))
    })

}

export const setCountries = (items: object[]): CountriesActionTypes => ({
    type: SET_COUNTRIES,
    payload: items
})

