import { put, takeLatest, call } from 'redux-saga/effects'
import uuid from 'react-uuid'
import axios from 'axios'
import * as _ from '../actions/userAction'

/*
  @description add user data
*/

function* addSagaReceived({ payload }) {
  try {
    const url = 'https://dummy-restapi.herokuapp.com/user'
    const res = yield call(axios.post, url, {
      id: uuid(),
      firstName: payload.firstName,
      lastName: payload.lastName
    })

    if (res.statusText === 'Created') {
      yield put({
        type: _.ADD_RECEIVED,
        payload: { message: 'Data Berhasil Ditambahkan' }
      })
    }
  } catch (err) {
    console.log(err)
  }
}

export function* addSagaRequest() {
  yield takeLatest(_.ADD_REQUEST, addSagaReceived)
}

/*
  @description results user data
*/

function* resultsSagaReceived() {
  try {
    const url = 'https://dummy-restapi.herokuapp.com/user'
    const res = yield call(axios.get, url)

    if (res.statusText === 'OK') {
      yield put({
        type: _.RESULTS_RECEIVED,
        payload: { users: res.data, loading: false }
      })
    }
  } catch (err) {
    console.log(err)
  }
}

export function* resultsSagaRequest() {
  yield takeLatest(_.RESULTS_REQUEST, resultsSagaReceived)
}

/*
	@description edit user data
*/

function* editSagaReceived({ payload }) {
  try {
    const url = `https://dummy-restapi.herokuapp.com/user/${payload.id}`
    const res = yield call(axios.get, url)

    if (res.statusText === 'OK') {
      yield put({
        type: _.EDIT_RECEIVED,
        payload: { id: res.data.id, firstName: res.data.firstName, lastName: res.data.lastName }
      })
    }
  } catch (err) {
    console.log(err)
  }
}

export function* editSagaRequest() {
  yield takeLatest(_.EDIT_REQUEST, editSagaReceived)
}

/*
  @description delete user data
*/

function* deleteSagaReceived({ payload }) {
  try {
    const url = `https://dummy-restapi.herokuapp.com/user/${payload.id}`
    const res = yield call(axios.delete, url)

    if (res.statusText === 'OK') {
      yield put({
        type: _.DELETE_RECEIVED,
        payload: { message: 'Data berhasil dihapus' }
      })
    }
  } catch (err) {
    console.log(err)
  }
}

export function* deleteSagaRequest() {
  yield takeLatest(_.DELETE_REQUEST, deleteSagaReceived)
}

/*
  @description delete user data
*/

function* updateSagaReceived({ payload }) {
  try {
    const url = `https://dummy-restapi.herokuapp.com/user/${payload.id}`
    const res = yield call(axios.put, url, { firstName: payload.firstName, lastName: payload.lastName })

    if (res.statusText === 'OK') {
      yield put({
        type: _.UPDATE_RECEIVED,
        payload: { message: 'Data berhasil diperbarui' }
      })
    }
  } catch (err) {
    console.log(err)
  }
}

export function* updateSagaRequest() {
  yield takeLatest(_.UPDATE_REQUEST, updateSagaReceived)
}

/*
  @description cleanup data
*/

function* cleanupSagaReceived() {
  yield put({ type: _.CLEANUP_RECEIVED })
}

export function* cleanupSagaRequest() {
  yield takeLatest(_.CLEANUP_REQUEST, cleanupSagaReceived)
}
