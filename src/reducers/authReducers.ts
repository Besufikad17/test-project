import * as types from "../actions/index";
import { AuthActions, IState } from "../utils/types";

const initialState: IState = {
  token: "",
  error: null,
};

const reducers = (state = initialState, action: AuthActions) => {
  switch (action.type) {
    case types.REGISTER_USER_REQUEST:
      return {
        ...state,
      };
    case types.REGISTER_USER_ERROR:
      return {
        ...state,
        token: "",
        error: action.payload.error,
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        error: null,
      };
    case types.LOGIN_USER_REQUEST:
      return {
        ...state,
      };
    case types.LOGIN_USER_ERROR:
      return {
        ...state,
        token: "",
        error: action.payload.error,
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        error: null,
      };
    default: 
      return {
        ...state
      }
  }
};

export default reducers;
