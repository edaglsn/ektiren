import {call, fork, put, select, take, takeLatest} from 'redux-saga/effects';
import {PROFILE_SAVE_USER_INFO, SET_USER_DATA} from '../actions/types';
import {
  getFirebaseUserData,
  setUserProfileData,
} from '../utils/firebaseServices';

function* profileSaveInfo(action) {
  try {
    const {userInfo, userImage, navigation} = action.payload;
    const {user} = yield select((state) => state.initial);

    console.log('userInfo', userInfo);
    console.log('userImage', userImage);
    yield call(setUserProfileData, userInfo, user, userImage);

    //update the changed info in reducer
    const userData = yield call(getFirebaseUserData, user.uid);
    yield put({
      type: SET_USER_DATA,
      payload: {userData: userData},
    });
  } catch (error) {
    console.log({error});
  }
}

export function* userWatcher() {
  yield takeLatest(PROFILE_SAVE_USER_INFO, profileSaveInfo);
}
