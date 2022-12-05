import { LOGIN_USER_ERROR, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, REGISTER_USER_ERROR, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../actions"

export interface IUser {
    username: string,
    email: string,
    password: string
}

export interface IUserLogin { 
    username: string, 
    password: string
}

export interface IAuth {
    token: string
}

export interface IState {
   token: string,
   error: string | null
}

export interface LoginPayload {
    values: { username: string, password: string },
    callback: any
}

export interface RegisterPayload {
    values: { username: string, email:string, password: string },
    callback: any
}

export interface LoginSuccessPayload {
    token: string
}


export interface RegisterSuccessPayload {
    token: string
}


export interface LoginFailurePayload {
    error: string
}

export interface RegisterFailurePayload {
    error: string
}

export interface LoginSuccess {
    type: typeof LOGIN_USER_SUCCESS,
    payload: LoginSuccessPayload
}

export interface LoginFailure {
    type: typeof LOGIN_USER_ERROR,
    payload: LoginFailurePayload
}

export interface RegisterSuccess {
    type: typeof REGISTER_USER_SUCCESS,
    payload: RegisterSuccessPayload
}

export interface RegisterFailure {
    type: typeof REGISTER_USER_ERROR,
    payload: RegisterFailurePayload
}

export interface LoginRequest {
    type: typeof LOGIN_USER_REQUEST,
    payload: LoginPayload
}


export interface RegisterRequest {
    type: typeof REGISTER_USER_REQUEST,
    payload: RegisterPayload
}

export type AuthActions = LoginRequest | LoginSuccess | LoginFailure | RegisterRequest | RegisterSuccess | RegisterFailure;