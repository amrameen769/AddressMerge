import axios from "axios";
import {GET_SPONSORS, DELETE_SPONSOR, EDIT_SPONSOR, ADD_SPONSOR, GET_SPONSORGROUPS} from "./types";
import {createMessage, returnErrors} from './messagesAction';
import {tokenConfig} from "./authentication";

// GET SPONSORS
export const getSponsors = () => (dispatch, getState) => {
    axios
        .get("/api/sponsors/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SPONSORS,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//DELETE SPONSOR
export const deleteSponsor = id => (dispatch, getState) => {
    axios
        .delete(`/api/sponsors/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({sponsorDeleted: "Sponsor Deleted!"}));
            dispatch({
                type: DELETE_SPONSOR,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

//ADD SPONSOR
export const addSponsor = (sponsor) => (dispatch, getState) => {
    axios
        .post("/api/sponsors/", sponsor, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({sponsorAdded: "Sponsor Added"}));
            dispatch({
                type: ADD_SPONSOR,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//EDIT SPONSOR
export const editSponsor = id => (dispatch, getState) => {
    axios
        .get(`/api/sponsors/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: EDIT_SPONSOR,
                payload: res.data
            });
        }).catch(err => console.log(err));

};

//GET SPONSORGROUP
export const getSponsorGroup = () => (dispatch, getState) => {
    axios.get('/api/sponsorgroups', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SPONSORGROUPS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};