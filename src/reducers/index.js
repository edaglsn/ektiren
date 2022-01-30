import {combineReducers} from 'redux';

import InitialReducer from './initialReducer';
import ModalReducer from './modalReducer';

export default combineReducers({
  initial: InitialReducer,
  modal: ModalReducer,
});
