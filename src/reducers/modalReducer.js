import {SET_LOADING_STATUS} from '../actions/types';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
