import { configureStore } from '@reduxjs/toolkit';
import { Store } from 'redux';
import createSagaMiddleWare, { Task } from 'redux-saga';
import rootReducer, { RootState } from './rootReducer';
import rootSaga from './rootSaga';

export interface SagaStore extends Store<RootState> {
  sagaTask: Task;
}

const configureAppStore = () => {
  const sagaMiddleware = createSagaMiddleWare();
  const makeStore = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
  });

  (makeStore as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return makeStore;
};

const store = configureAppStore();

export default store;
