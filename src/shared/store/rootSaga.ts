import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { saga as project } from './project';

const sagas = [project];

export default function* rootSaga(): SagaIterator {
  yield all(sagas.flat().map((saga) => fork(saga)));
}
