import {all} from 'redux-saga/effects';

import {getInitialServicesWatcher} from './initialSagas';
import {authWatcher} from './authSagas';
import {userWatcher} from './userSagas';
import {getFirebaseServicesWatcher} from './firebaseSagas';
import {geoLocationWatcher} from './geoLocationSagas';
import {getTrmeppSagaWatcher} from './trmeppSagas';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    getInitialServicesWatcher(),
    getFirebaseServicesWatcher(),
    authWatcher(),
    userWatcher(),
    geoLocationWatcher(),
    getTrmeppSagaWatcher(),
  ]);
}
