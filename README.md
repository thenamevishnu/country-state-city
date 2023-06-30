# country-state-city

[![Node.js Package](https://github.com/thenamevishnu/country-state-city/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/thenamevishnu/country-state-city/actions/workflows/npm-publish.yml)

<h2>How to Use ? </h2>

<b>Nodejs<b>

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

