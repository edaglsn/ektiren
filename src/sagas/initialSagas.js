import {takeLatest, select} from 'redux-saga/effects';
import SplashScreen from 'react-native-splash-screen';
import {
  IN_CIRCLE_OPERATIONS,
  INITIAL_APP_LAUNCH_OPERATIONS,
} from '../actions/types';

function* initialAppLaunchOperations(action) {
  try {
    const {navigation} = action.payload;
    const {user} = yield select((state) => state.initial);

    console.log('batman user initial', user);

    SplashScreen.hide();

    if (user) {
      console.log('User In initial');
      // if()

      // navigation.replace(MAIN_NAVIGATION,{
      //   screen:LOUNGE_NAVIGATION
      // })
    } else {
      console.log('User is not in initial');
      // navigation.replace(MAIN_NAVIGATION,{
      //   screen:AUTH_NAVIGATION
      // })
    }
  } catch (err) {
    console.log('initialAppLaunchOperations err', err);
  }
}

function* inCircleOperations(action) {
  try {
    const {user} = yield select((state) => state.initial);

    // get circle coordinates that are in the database
    // get current location data from the device

    //check if a user in single circle

    //write that user inside that circle

    //check if the
  } catch (err) {
    console.log('initialAppLaunchOperations err', err);
  }
}

// ToDo transfer geoLocation logic to the sagas

// function * syncGeoLocationData () {
//   const channel = yield call(geoLocationChannel)
//
//   while (true) {
//     const { location } = yield take(channel)
//     console.log('geoLocationChannel', location)
//
//   }
// }

export function* getInitialServicesWatcher() {
  // yield fork(syncGeoLocationData)
  yield takeLatest(INITIAL_APP_LAUNCH_OPERATIONS, initialAppLaunchOperations);
  yield takeLatest(IN_CIRCLE_OPERATIONS, inCircleOperations);
}
