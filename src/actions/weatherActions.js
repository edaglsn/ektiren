import {GET_WEATHER_FORECAST} from './types';

export const getWeatherForecastData = () => {
  return {
    type: GET_WEATHER_FORECAST,
    // payload: {
    //   navigation,
    // },
  };
};
