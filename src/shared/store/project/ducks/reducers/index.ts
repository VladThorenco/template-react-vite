import { combineReducers } from '@reduxjs/toolkit';
import getProject from 'shared/store/project/ducks/reducers/getProject';

export default combineReducers({
  getProject,
});
