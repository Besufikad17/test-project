import * as types from './index';
import * as AuthTypes from '../utils/types';

export const LoginRequest = (payload: AuthTypes.LoginPayload) : AuthTypes.LoginRequest => ({
    type: types.LOGIN_USER_REQUEST,
    payload
})

export const LoginSuccess = (payload: AuthTypes.LoginSuccessPayload) : AuthTypes.LoginSuccess => ({
    type: types.LOGIN_USER_SUCCESS,
    payload
})

export const LoginFailure = (payload: AuthTypes.LoginFailurePayload) : AuthTypes.LoginFailure => ({
    type: types.LOGIN_USER_ERROR,
    payload
})

export const RegisterRequest = (payload: AuthTypes.RegisterPayload) : AuthTypes.RegisterRequest => ({
    type: types.REGISTER_USER_REQUEST,
    payload
})

export const RegisterSuccess = (payload: AuthTypes.RegisterSuccessPayload) : AuthTypes.RegisterSuccess => ({
    type: types.REGISTER_USER_SUCCESS,
    payload
})

export const RegisterFailure = (payload: AuthTypes.RegisterFailurePayload) : AuthTypes.RegisterFailure => ({
    type: types.REGISTER_USER_ERROR,
    payload
})