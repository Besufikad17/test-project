import axios from "axios";
import { string } from "yup";
import { IUser, IUserLogin } from "../utils/types";

export const registerService = (user: IUser) => {
    return user;
    // return axios.post('', user).then(res => {
    //     return res;
    // }).catch(err => {
    //     return err;
    // })
}

export const loginService = (user: IUserLogin) => {
    return user;
    // return axios.post('', user).then(res => {
    //     return res;
    // }).catch(err => {
    //     return err;
    // })
}