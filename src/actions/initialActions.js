import {
  FACEBOOK_LOGIN,
  IN_CIRCLE_OPERATIONS,
  INITIAL_APP_LAUNCH_OPERATIONS,
  PHONE_LOGIN,
  PHONE_LOGIN_VALIDATE_CODE,
  SET_USER_LOCATION,
} from './types';

export const initialAppLaunchOperations = (navigation) => {
  return {
    type: INITIAL_APP_LAUNCH_OPERATIONS,
    payload: {
      navigation,
    },
  };
};

export const operateInCircleLogic = (navigation) => {
  return {
    type: IN_CIRCLE_OPERATIONS,
    payload: {
      navigation,
    },
  };
};

export const setUserLocation = (coordinates) => {
  console.log('coordinates', coordinates);
  return {
    type: SET_USER_LOCATION,
    payload: {
      coordinates,
    },
  };
};

export const loginWithFacebook = () => {
  return {
    type: FACEBOOK_LOGIN,
  };
};

export const loginWithPhoneNumber = (data, navigation) => {
  return {
    type: PHONE_LOGIN,
    payload: {
      data,
      navigation,
    },
  };
};
export const validatePhoneCode = (code, navigation) => {
  return {
    type: PHONE_LOGIN_VALIDATE_CODE,
    payload: {
      code,
      navigation,
    },
  };
};
