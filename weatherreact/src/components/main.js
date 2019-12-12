import React, { Component } from 'react';

//import the connect and bindActionsCreators functions
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//import the action
import {fetchAPIResponse} from "../actions/fetch_api_data";

class Main extends Component {
  constructor(){
    super();
    this.state = {
      value: ""
    }
  }

  componentWillMount= () =>{
     //this.props.FetchAPIResponse("Paris");
  }

  //search function
  search = () =>{
    //this.props.FetchAPIResponse(this.state.value);
  }

  changeHandler = (e) =>{
    let value= e.target.value;
    this.setState({
      value : value
    });
    
  }

  render() {
    return (
      <div>
           <div className="form">
            <input name="city" placeholder="New York" onChange ={this.changeHandler} />
            <button onClick={this.search}> <i className="fas fa-search"></i> </button>
          </div>
        <div className="dashboard">
            <div className="data-container">
            <div className="square">
                <p>City</p>
                <p className="data">{this.props.apiLocation[0]}</p>
                <p>Feels like</p>
                <p className="data">{this.props.apiResponse[16]} °F</p>
            </div>  
		    </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state){
  return{
    apiResponse: state.FetchWeatherReducer.weatherData,
    apiLocation : state.FetchWeatherLocation.location,
    apiConditions: state.FetchCurrentConditions.conditions
  }
}

function matchDispatchToProps(dispatch){
 // return bindActionCreators({FetchAPIResponse:fetchAPIResponse}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Main);