import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import * as weatherActions from './weather.actions';
import { weatherDataSelector } from './weather.selectors';

const Weather = ({weatherData, getWeatherData}) => {

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      <ul className="cities-list">
      {weatherData.map(weather => (
          <li key={Math.random()} className="city">
            <span className="city__name">{weather.name}</span>
            <span className="city__temperature">{`${weather.temperature} F`}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};


const mapState = state => {
  return {
    weatherData: weatherDataSelector(state),
  };
};

const mapDispatch = {
  getWeatherData: weatherActions.getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
