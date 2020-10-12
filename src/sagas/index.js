import { all } from 'redux-saga/effects'
import {
  addSagaRequest,
  resultsSagaRequest,
  editSagaRequest,
  deleteSagaRequest,
  updateSagaRequest,
  cleanupSagaRequest
} from './userSaga'

export function* rootSagas() {
  yield all([
    addSagaRequest(),
    resultsSagaRequest(),
    editSagaRequest(),
    deleteSagaRequest(),
    updateSagaRequest(),
    cleanupSagaRequest()
  ])
}
