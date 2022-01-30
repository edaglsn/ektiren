import {call, put, takeLatest, select, take, fork} from 'redux-saga/effects';

import {
  FACEBOOK_LOGIN,
  INITIAL_FIREBASE_OPERATIONS,
  PHONE_LOGIN,
  PHONE_LOGIN_FIREBASE_CONFIRMATION,
  PHONE_LOGIN_VALIDATE_CODE,
  SET_REQUESTS_DATA,
} from '../actions/types';
import {PHONE_CODE_VALIDATION_SCREEN} from '../navigation/NavigationScreens';
import {
  authChannel,
  facebookLogin,
  phoneLogin,
  phoneLoginValidatePin,
} from '../utils/authFunctions';
import {concatenatePhoneNumber} from '../utils/commonFunctions';
import {syncUser} from '../actions';
import {getContactRequestsChannel} from '../utils/firebaseServices';
import {initialFirebaseUserOperations} from './firebaseSagas';

function* loginWithPhoneNumber(action) {
  try {
    const {data, navigation} = action.payload;

    const phoneLoginConfirmation = yield call(
      phoneLogin(concatenatePhoneNumber(data)),
    );

    yield put({
      type: PHONE_LOGIN_FIREBASE_CONFIRMATION,
      payload: phoneLoginConfirmation,
    });

    navigation.navigate(PHONE_CODE_VALIDATION_SCREEN);
  } catch (error) {
    console.log({error});
  }
}

function* validatePhoneCode(action) {
  try {
    const {code, navigation} = action.payload;

    const {phoneLoginConfirmation} = yield select((state) => state.initial);

    yield call(phoneLoginValidatePin(phoneLoginConfirmation, code));
  } catch (error) {
    console.log({error});
  }
}

function* loginWithFacebook(action) {
  try {
    yield call(facebookLogin);
  } catch (error) {
    console.log({error});
  }
}

function* syncUserSaga() {
  const channel = yield call(authChannel);

  while (true) {
    const {user} = yield take(channel);
    console.log('oley oley oley oleyol ye', user);

    if (user) {
      yield call(initialFirebaseUserOperations, user);
      yield fork(syncRequestsSaga);
    } else {
      yield put(syncUser(null));
    }
  }
}

function* syncRequestsSaga() {
  const {user} = yield select((state) => state.initial);
  console.log('user batman', user);
  console.log('user batman', user.uid);
  const channel = yield call(getContactRequestsChannel(user?.uid));

  while (true) {
    const {requestList} = yield take(channel);
    console.log('user brofist', requestList);

    yield put({
      type: SET_REQUESTS_DATA,
      payload: requestList,
    });
  }
}

export function* authWatcher() {
  yield takeLatest(FACEBOOK_LOGIN, loginWithFacebook);
  yield takeLatest(PHONE_LOGIN, loginWithPhoneNumber);
  yield takeLatest(PHONE_LOGIN_VALIDATE_CODE, validatePhoneCode);
  yield fork(syncUserSaga);
}
