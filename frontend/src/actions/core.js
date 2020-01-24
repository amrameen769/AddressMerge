import axios from "axios";
import {GET_SPONSORS, DELETE_SPONSOR, EDIT_SPONSOR, ADD_SPONSOR,} from "./types";
import {createMessage, returnErrors } from './messagesAction';

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
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
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
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
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
