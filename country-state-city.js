import json from "./countries-states-cities.js"

export const getCountries = async () => {
    const array = []
    json.map(obj=>array.push({name:obj.name,iso2:obj.iso2,iso3:obj.iso3}))
    return array
}

export const getStates = async (country) => {
    const array = []
    const stateData = json.find(countries => countries.name == country)
    stateData?.states.map(obj=>array.push({name:obj.name,code:obj.state_code}))
    return array
}

export const getCities = async (country,state) => {
    const array = []
    const countryData = json.find(items => items.name == country)
    const stateData = countryData.states.find(items => items.name == state)
    stateData.cities.map(obj=>array.push(obj.name))
    return array
}