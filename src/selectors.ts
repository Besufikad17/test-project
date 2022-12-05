import { createSelector } from "reselect";
import { IState } from "./utils/types";

const getAuth = (state: IState) => state.token;
const getError = (state:IState) => state.error;

export const getAuthSelector = createSelector(getAuth, (token) => token);
export const getErrorSelector = createSelector(getError, (error) => error);