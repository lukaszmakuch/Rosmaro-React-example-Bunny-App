import {delay} from 'redux-saga'
import {put, takeEvery, all} from 'redux-saga/effects'

function* checkName({name}) {
  yield delay(1000)
  yield put({type: 'NAME_ACCEPTED', name})
};

function* watchDelayedNameVerification() {
  yield takeEvery('CHECK_NAME', checkName)
};

export default function* rootSaga() {
  yield all([
    watchDelayedNameVerification()
  ])
};