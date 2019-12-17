//Use Cards to display multiple cities in a row.
import React from 'react';
import './card.css';

class card extends React.Component {
    //this is to populate my city list with weather data
    populateList(weatherData, index) {
        return (
            <div className="Widget" data-test="BoxWidget" key={index}>
                <div className="Boxwidget">
                    <div className="Cardheader">{weatherData.cityName}</div>
                    <div className="Cardblock">
                        <p>Min : {Math.round(weatherData.Min * (9/5)- 459.67)} &#8457;   {Math.round(weatherData.Min - 273.15)} &#8451;  </p>
                        <p>Max : {Math.round(weatherData.Max * (9/5)- 459.67)} &#8457;   {Math.round(weatherData.Max - 273.15)} &#8451; </p>
                    </div>
                    <div className="CardFooter">
                        <button type="button" className="ButtonPrimary" onClick={this.removeCityFromMyListClick.bind(this, weatherData.cityName)}>Remove</button>
                    </div>
                </div>
            </div >
        );
    }

    //function call for removing city from the list
    removeCityFromMyListClick(cityName) {
        this.props.removeCityFromList(cityName);
    }

    render() {
        return (
            <div className="Row">
                {this.props.weatherData && this.props.weatherData.map(this.populateList, this)}
            </div>
        );
    }
}

export default card;