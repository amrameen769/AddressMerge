import axios from "axios";
import {GET_SPONSORS, DELETE_SPONSOR, EDIT_SPONSOR, ADD_SPONSOR, GET_ERRORS} from "./types";
import {createMessage} from './messagesAction';

// GET SPONSORS
export const getSponsors = () => dispatch => {
    axios
        .get("/api/sponsors/")
        .then(res => {
            dispatch({
                type: GET_SPONSORS,
                payload: res.data
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
};

//DELETE SPONSOR
export const deleteSponsor = id => dispatch => {
    axios
        .delete(`/api/sponsors/${id}/`)
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
export const addSponsor = (sponsor) => dispatch => {
    axios
        .post("/api/sponsors/", sponsor)
        .then(res => {
            dispatch(createMessage({sponsorAdded: "Sponsor Added"}));
            dispatch({
                type: ADD_SPONSOR,
                payload: res.data
            });
        })
        .catch(err => {
            const errors = {
                msg: err.response.data,
                status: err.response.status
            };
            dispatch({
                type: GET_ERRORS,
                payload: errors
            });
        });
};

//EDIT SPONSOR
export const editSponsor = id => dispatch => {
    axios
        .get(`/api/sponsors/${id}/`)
        .then(res => {
            dispatch({
                type: EDIT_SPONSOR,
                payload: id
            });
        }).catch(err => console.log(err));

};
