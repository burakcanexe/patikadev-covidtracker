import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCovidDetail } from '../redux/covidSlice'

function Form() {
    const countries = useSelector(state => state.covid.countries).countries
    const dispatch = useDispatch()
    const changeHandler = (e) => {
        dispatch(getCovidDetail(e.target.value || ''))
    }
    return (
        <form>
            <select onChange={(e) => changeHandler(e)}>
                {countries && countries.map(country => (
                    <option key={country.iso3} value={country.iso3}>{country.name}</option>
                ))}
            </select>
        </form>
    )
}

export default Form