
## Installation
```
$ npm i vk-country-state-city
```

## Usage
```js
import {getCities, getCountries, getStates} from "./country-state-city.js" 

getCountries().then(response => console.log(response)) // [{name:"india",iso2:"IN",iso3:"IND"}] 

getStates(country).then(response => console.log(response)) // [{name:"Kerala",code:"KL"}]

getCities(country,state).then(response => console.log(response)) // ["Kozhikode"]
```