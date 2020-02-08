import axios from 'axios';
import {returnErrors} from "./messagesAction";

import {REGISTER_FAILED, REGISTER_SUCCESS, USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS} from './types';

//CHECK TOKEN & LOAD CLIENT
export const loadClient = () => (dispatch, getState) => {
    //User Loading
    dispatch({
        type: USER_LOADING
    });

    axios.get('/api/auth/client', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            });
        }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: AUTH_ERROR
        });
    });
};

// LOGIN CLIENT
export const loginClient = (username, password) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    //Request Body
    const body = JSON.stringify({username, password});

    axios.post('/api/auth/login', body, config)
        .then(res => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: LOGIN_FAILED
        });
    });
};

//LOGOUT USER

export const logoutClient = () => (dispatch, getState) => {
    axios.post('/api/auth/logout', null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: LOGOUT_SUCCESS
            });
        }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
    });
};

//Setup config with token - helper function
export const tokenConfig = getState => {
    //Get Token from State
    const token = getState().authentication.token;

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    //If Token, add to Headers Config
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    return config;
};

//REGISTER USER
export const registerClient = ({username, password, email}) => dispatch => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    //Request Body
    const body = JSON.stringify({username, password, email});

    axios.post('/api/auth/register', body, config)
        .then(res => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        }).catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
            type: REGISTER_FAILED
        });
    });
};