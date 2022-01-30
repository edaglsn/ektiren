import {
  PHONE_LOGIN_FIREBASE_CONFIRMATION,
  SET_CIRCLE_LIST,
  SET_LOGGED_IN,
  SET_PEOPLE_IN_CIRCLE,
  SET_REQUESTS_DATA,
  SET_THE_CIRCLE_USER_IN,
  SET_USER_DATA,
  SET_USER_LOCATION,
  SYNC_USER,
} from '../actions/types';

const initialState = {
  user: null,
  loggedIn: false,

  phoneLoginConfirmation: null,
  userData: {},
  userLocation: [],
  circleList: [],
  insideCircle: -1,
  peopleInCircle: [],
  requests: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_REQUESTS_DATA:
      return {
        ...state,
        requests: action.payload,
      };

    case SET_LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload,
      };

    case SET_THE_CIRCLE_USER_IN:
      return {
        ...state,
        insideCircle: action.payload,
      };

    case SET_PEOPLE_IN_CIRCLE:
      return {
        ...state,
        peopleInCircle: action.payload,
      };

    case PHONE_LOGIN_FIREBASE_CONFIRMATION:
      return {
        ...state,
        phoneLoginConfirmation: action.payload,
      };

    case SYNC_USER:
      return {
        ...state,
        loggedIn: !!action.payload.user,
        user: action.payload.user,
      };

    case SET_USER_DATA:
      return {
        ...state,
        userData: action.payload.userData,
      };

    case SET_CIRCLE_LIST:
      return {
        ...state,
        circleList: action.payload,
      };

    case SET_USER_LOCATION:
      return {
        ...state,
        userLocation: action.payload,
      };

    default:
      return state;
  }
};
