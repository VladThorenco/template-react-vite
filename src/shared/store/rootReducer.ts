import { combineReducers } from '@reduxjs/toolkit';
import { reducers as project } from 'shared/store/project';

const rootReducer = combineReducers({
  project,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
