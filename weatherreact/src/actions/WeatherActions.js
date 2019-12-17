import fetchApiData from './fetch_api_data';
import * as actionTypes from './WeatherActionTypes';

//Creating own list of cities
const initialState = {
    cities: ["Pune", "Delhi", "Boston", "Phoenix", "Sacramento", "Denver", "Nashville", "Houston", "Miami", "New York", "Honolulu", "Juneau","Paris"]
};

function getCityData(cities) {
    return {
        type: actionTypes.REQUEST_DATA,
        list: cities
    }
}

//the dispatch method of the store to get all cities on page load
export function getCities() {
    return function (dispatch) {
        dispatch(getCityData(initialState.cities));
    };
}

function saveCityToList(data) {
    return {
        type: actionTypes.RECEIVE_DATA,
        cityWeatherData: {
            cityName: data.name,
            Min: data.main.temp_min,
            Max: data.main.temp_max
        }
    }
}

//the dispatch method of the store for invocation at a later stage when the user interacts with the component to add a city to list
export function addCityToCard(searchTxt) {
    return function (dispatch) {
        return fetchApiData.getWeatherDataForACity(searchTxt).then(data => {
            dispatch(saveCityToList(data));
        }).catch(error => {
            throw (error);
        });
    }
}

function removeCityFromCard(cityName) {
    return {
        type: actionTypes.REMOVE_DATA,
        cityName: cityName
    }
}

//currying the dispatch method of the store for invocation at a later stage when the user interacts with the component to remove a city from list
export function removeCityFromList(city) {
    return function (dispatch) {
        dispatch(removeCityFromCard(city));
    };
}