
## Installation
```
$ npm i vk-country-state-city
```

## Usage
```js
import {getCountries, getStates, getCities} from "vk-country-state-city"

const main = async () => {
    const countries = await getCountries()
    const country = countries[0].name
    console.log(country) // Eg: [{name:"India",iso2:"IN",iso3:"IND"}]

    const states = await getStates(country)
    const state = states[0].name
    console.log(state) // Eg: [{name:"Kerala",code:"KL"}]

    const cities = await getCities(country, state)
    console.log(cities) // Eg: ["kozhikode"]
}

main()
```