import {takeLatest, select, call} from 'redux-saga/effects';
import {GET_WEATHER_FORECAST} from '../actions/types';

function* getWeatherForecast(action) {
  try {
    console.log('test');
    const {lat, lon, duration} = action.payload;
    const {data, conversationToken} = yield call(
      getAvailability,
      lat,
      lon,
      duration,
    );
  } catch (err) {
    console.log('getWeatherForecast err', err);
  }
}

const getAvailability = async (lat, lon, duration) => {
  try {
    const response = await client.post(
      'https://atlas.microsoft.com/weather/forecast/daily/json?subscription-key=' +
        'lOjsWH0sMhL3k99nhsSg7jqfSFLnkjN592hGlflQBOo' +
        '&api-version=1.0&query=' +
        lat +
        ',' +
        lon +
        '&duration=' +
        duration,
    );
    return {
      data: response.data,
      conversationToken: response.headers['x-conversation-token'],
    };
  } catch (e) {
    throw e;
  }
};

export function* getTrmeppSagaWatcher() {
  yield takeLatest(GET_WEATHER_FORECAST, getWeatherForecast);
}
