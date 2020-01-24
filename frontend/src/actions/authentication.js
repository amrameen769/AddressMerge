import axios from 'axios';
import {returnErrors} from "./messagesAction";

import {USER_LOADED, USER_LOADING, AUTH_ERROR} from './types';

//CHECK TOKEN & LOAD CLIENT
export const loadClient = () => (dispatch, getState) => {
    //User Loading
    dispatch({
        type: USER_LOADING
    });

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

    axios.get('/api/auth/client', config)
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