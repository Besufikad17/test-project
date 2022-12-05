import { all, fork } from 'redux-saga/effects';
import authSaga  from './authSaga';


export default function* watchUserAuthentication() {
   yield all([fork(authSaga)]);
}