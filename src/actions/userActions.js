import {
  ON_GEOFENCE_EVENT_UPDATE,
  PROFILE_SAVE_USER_INFO,
  SYNC_USER,
} from './types';

export const saveUserInfo = (userInfo, userImage, navigation) => {
  return {
    type: PROFILE_SAVE_USER_INFO,
    payload: {
      userInfo,
      userImage,
      navigation,
    },
  };
};

export const onGeofenceEventUpdate = (navigation, event) => {
  return {
    type: ON_GEOFENCE_EVENT_UPDATE,
    payload: {
      navigation,
      event,
    },
  };
};

export const syncUser = (user) => {
  return {
    type: SYNC_USER,
    payload: {
      user,
    },
  };
};
