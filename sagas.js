import { put, takeEvery, all, call } from "redux-saga/effects";

export const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  console.log("hello sagas");
}

export function* incrementAsync() {
  yield call(delay, 1000); // using call will allow us to test the delay func in the unit test
  yield put({ type: "INCREMENT" });
}

export function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
