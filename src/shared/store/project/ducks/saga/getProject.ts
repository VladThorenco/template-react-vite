import { put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { actions } from '../../index';

export function* getProject(): SagaIterator {
  try {
    //const response = yield call(formService.getProject, `projects/${id}`);
    //yield put(actions.getProjectActions.end(response));
  } catch (error: any) {
    if (error.response) {
      const { message, errorCode: stackErrors } = error.response.data;
      yield put(actions.getProjectActions.error({ message, stackErrors }));
    }
  }
}

export default function* getFormSaga(): SagaIterator {
  yield takeLatest(actions.getProjectActions.start, getProject);
}
