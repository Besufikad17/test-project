import axios from 'axios';
import {put, call, all, takeLatest} from 'redux-saga/effects';
import {  AuthActions } from '../utils/types';
import { LoginFailure, LoginSuccess, RegisterFailure, RegisterSuccess } from '../actions/authActions';
import { LOGIN_USER_REQUEST, REGISTER_USER_REQUEST } from '../actions';
import { IAuth } from '../utils/types';


export const login = async(payload: {username: string, password: string}) => {
    const {data} = await axios.post("http://localhost:4000/api/login", 
        {username: payload.username, password: payload.password});
    // console.log(data);
    return data;
}

const signup = async(payload: {username: string, email: string, password: string}) => {
    const {data} = await axios.post("http://localhost:4000/api/signup", 
        {username: payload.username, email: payload.email, password: payload.password});
    // console.log(data);
    return data;
}

function* loginSaga(action: any){
    try{
        const response: {token: string} = yield call(login,
             { username: action.payload.values.username, password: action.payload.values.password});
        yield put(
            LoginSuccess({
                token: response.token
            })
        )
        action.payload.callback(response.token);
    }catch(err: any){
        yield put(
            LoginFailure({
                error: err.message
            })
        )
    }
}

function* signupSaga(action: any){
    try{
        const response: {token: string} = yield call(signup,
             { username: action.payload.values.username, email: action.payload.values.email, password: action.payload.values.password});
        yield put(
            RegisterSuccess({
                token: response.token
            })
        )
        action.payload.callback(response.token);
    }catch(err: any){
        yield put(
            RegisterFailure({
                error: err.message
            })
        )
    }
}

function* authSaga(){
    yield all([takeLatest(LOGIN_USER_REQUEST, loginSaga)]);
    yield all([takeLatest(REGISTER_USER_REQUEST, signupSaga)]);
}

export default authSaga;