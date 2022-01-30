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
  INITIAL_FIREBASE_OPERATIONS,
  SET_CIRCLE_LIST,
  SET_LOADING_STATUS,
  SET_PEOPLE_IN_CIRCLE,
  SET_USER_DATA,
} from '../actions/types';

import {
  chatRequestsChannel,
  chatRequetsChannel,
  getCircleList,
  getFirebaseUserData,
  usersInCircleChannel,
} from '../utils/firebaseServices';
import {modifyCircleList} from '../utils/commonFunctions';
import {syncUser} from '../actions';

export function* initialFirebaseUserOperations(user) {
  try {
    yield put({type: SET_LOADING_STATUS, payload: true});
    // const {user} = yield select((state) => state.initial);
    // const {user} = action.payload;
    console.log('user.id', user.uid);

    if (user) {
      console.log('user', user);
      let circleList = yield call(getCircleList);
      circleList = yield call(modifyCircleList, circleList);

      yield put({
        type: SET_CIRCLE_LIST,
        payload: circleList,
      });

      const userData = yield call(getFirebaseUserData, user.uid);

      yield put({
        type: SET_USER_DATA,
        payload: {
          userData: userData,
        },
      });

      console.log('circleList', circleList);

      yield put(syncUser(user));
      yield put({type: SET_LOADING_STATUS, payload: false});
    } else {
    }
  } catch (err) {
    console.log('initialFirebaseUserOperations err', err);
  }
}

export function* getFirebaseServicesWatcher() {
  yield takeLatest(INITIAL_FIREBASE_OPERATIONS, initialFirebaseUserOperations);
}
