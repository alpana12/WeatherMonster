import React from 'react';

//import the connect and bindActionsCreators functions
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//import weather data for cities
import CityList from './CityList.js';
import { getCities, addCityToCard, removeCityFromList } from '../actions/WeatherActions';
import Card from './card';

class Main extends React.Component {
    componentDidMount() {
        this.props.getCities();
    }

    render() {
        return (
            <>
                <CityList cities={this.props.cities} weatherData={this.props.weatherDataList} addCityToList={this.props.addCityToList} />
                <Card weatherData={this.props.weatherDataList} removeCityFromList={this.props.removeCityFromList}/>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        cities: state.WeatherReducers.cities,
        weatherDataList: state.WeatherReducers.weatherDataList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getCities: getCities,
        addCityToList: addCityToCard,
        removeCityFromList: removeCityFromList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);