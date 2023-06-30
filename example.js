import {getCities, getCountries, getStates} from "./country-state-city.js"

getCountries().then(response => {
    const country = response[0].name
    getStates(country).then(response => {
        const state = response[0].name
        getCities(country,state).then(response => {
           console.log(response);
        })
    })
})