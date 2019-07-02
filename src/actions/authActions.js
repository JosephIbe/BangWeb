import Axios from 'axios';
import setAuthUserToken from '../helpers/setAuthUserToken';
import JWTDecode from 'jwt-decode';
import {
    SHOW_ERRORS,
    SET_CURRENT_USER,
    IS_LOADING
} from './types';

import { STORAGE_JWT_KEY } from '../helpers/Constants';

export const createUser = (userObj) => dispatch =>  {
    Axios.post('/api/user/register', userObj)
        .then(response => {
            console.log(response);
            this.props.history.push('/browse')
            // this.props.history.push('/login');
        })
        .catch(err => {
            dispatch({
                type: SHOW_ERRORS,
                payload: err.response.data
            })
        });
};

export const loginUser = userInfo => dispatch => {
    Axios.post('/api/user/login', userInfo)
        .then(response => {
            const { token } = response.data;
            //save token in local storage
            localStorage.setItem(STORAGE_JWT_KEY, token);
            // set user's token
            setAuthUserToken(token);
            //decode JWT
            const decodeToken = JWTDecode(token);
            // set current user
            dispatch(SET_CURRENT_USER(decodeToken));
        })
        .catch(err => {
            dispatch({
                type: SHOW_ERRORS,
                payload: err.response.data
            })
        })
};

export const setCurrentUser = decodedToken => {
    return {
        type: SET_CURRENT_USER,
        payload: decodedToken
    }
};

export const setUserLoading = () => {
    return {
        type: IS_LOADING
    }
};

export const logOutUser = () => dispatch => {
    localStorage.removeItem(STORAGE_JWT_KEY);
    // remove authorization header from further requests
    setAuthUserToken(false);
    // set current user to {} which sets isAuth to false
    dispatch(setCurrentUser({}))
};