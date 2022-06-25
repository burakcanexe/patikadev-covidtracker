import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCountries = createAsyncThunk('covid/getCountries', async () => {
    const res = await axios.get('https://covid19.mathdro.id/api/countries')
    return res.data
})

export const getCovidDetail = createAsyncThunk('covid/getCovidDetail', async (iso3) => {
    const res = await axios.get(`https://covid19.mathdro.id/api/countries/${iso3}`)
    return res.data
})

export const covidSlice = createSlice({
    name: 'covid',
    initialState: {
        countries: [],
        detail: {
            "confirmed": {
                "value": 182072,
                "detail": "https://covid19.mathdro.id/api/countries/AFG/confirmed"
            },
            "recovered": {
                "value": 0,
                "detail": "https://covid19.mathdro.id/api/countries/AFG/recovered"
            },
            "deaths": {
                "value": 7717,
                "detail": "https://covid19.mathdro.id/api/countries/AFG/deaths"
            },
            "lastUpdate": "2022-06-25T16:20:55.000Z"
        }
    },
    reducers: {

    },
    extraReducers: {
        [getCountries.fulfilled]: (state, action) => {
            state.countries = action.payload
        },
        [getCovidDetail.fulfilled]: (state, action) => {
            state.detail=action.payload
        }
    }
})

export default covidSlice.reducer