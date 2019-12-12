/* global fetch  */
import { requestWeather, invalidWeather, receiveWeather } from './WeatherActions.js'
import config from '../../configDefault.js'

const APIWeather = 'http://api.openweathermap.org'

export function fetchAPIResponse(location) {
  const units = 'metric'
  const appID = config.API_OPEN_WEATHER_ID || ''

  return dispatch => {
    dispatch(requestWeather())
    return fetch(`${APIWeather}/data/2.5/weather?q=${location}&units=${units}&appid=${appID}`)
      .then(req => req.json())
      .then(data => {
        if (data.cod === 200 || data.cod < 300) {
          dispatch(receiveWeather(data))
          dispatch(fetchBackground(location, data.weather[0].description))
        } else {
          const error = new Error(data.statusText)
          error.data = data
          dispatch(invalidWeather(data.cod, data.message))
          throw error
        }
      }).catch(error => {
        console.log('request failed', error)
      })
  }
}