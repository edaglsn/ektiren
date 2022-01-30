import {LOUNGE_SCREEN, MAIN_NAVIGATION} from '../navigation/NavigationScreens';
import {
  all,
  call,
  fork,
  put,
  select,
  take,
  takeLatest,
} from 'redux-saga/effects';
import {
  ON_GEOFENCE_EVENT_UPDATE,
  SET_PEOPLE_IN_CIRCLE,
  SET_THE_CIRCLE_USER_IN,
} from '../actions/types';
import {
  addUserToCircle,
  deleteUserFromCircle,
  getFirebaseUserData,
  setUserCircle,
  usersInCircleChannel,
} from '../utils/firebaseServices';

function* syncUserInCircleSaga() {
  const channel = yield call(usersInCircleChannel);

  console.log('cmoooob', channel);

  // while (insideCircle !== -1) {
  while (true) {
    const {peopleInCircle} = yield take(channel);
    console.log('payload', peopleInCircle);

    let usersDataList = [];

    for (let userUid of peopleInCircle) {
      usersDataList.push(call(getFirebaseUserData, userUid));
    }

    let response = yield all(usersDataList);

    if (peopleInCircle) {
      yield put({
        type: SET_PEOPLE_IN_CIRCLE,
        payload: response,
      });
    }
  }
}

function* onGeofenceEventUpdate(action) {
  try {
    const {event, navigation} = action.payload;
    const {user} = yield select((state) => state.initial);

    console.log('onGeofenceEventUpdate batman', event);

    if (event.action === 'ENTER') {
      yield put({
        type: SET_THE_CIRCLE_USER_IN,
        payload: event.identifier,
      });
      yield call(setUserCircle, user, event.identifier);
      yield call(addUserToCircle, user, event.identifier);
      navigation.navigate(MAIN_NAVIGATION);
    } else {
      yield put({
        type: SET_THE_CIRCLE_USER_IN,
        payload: -1,
      });
      yield call(setUserCircle, user, -1);
      yield call(deleteUserFromCircle, user, event.identifier);
      navigation.navigate(LOUNGE_SCREEN);
    }
  } catch (error) {
    console.log({error});
  }
}

export function* geoLocationWatcher() {
  yield takeLatest(ON_GEOFENCE_EVENT_UPDATE, onGeofenceEventUpdate);
  yield fork(syncUserInCircleSaga);
}
