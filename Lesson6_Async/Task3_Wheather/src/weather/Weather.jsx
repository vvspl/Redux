import React from 'react';
import { connect } from 'react-redux';
import {getWheatherData} from './weather.actions';
import { weatherDataSelector } from './weather.selectors';

const Weather = (props) => {

  console.log(getWheatherData());
  console.log(props.weatherData);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
        {}
        <li className="city">
          <span className="city__name">Lake Hilmaside</span>
          <span className="city__temperature">78 F</span>
        </li>
      </ul>
    </main>
  );
};


const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  };
};

export default connect(mapState)(Weather);
