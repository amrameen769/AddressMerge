import axios from "axios";
import {
    GET_SPONSORS,
    DELETE_SPONSOR,
    GET_SPONSOR,
    ADD_SPONSOR,
    GET_SPONSORGROUPS,
    GET_SPONSORGROUP
} from "./types";
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

//GET SPONSOR
export const getSponsor = id => (dispatch, getState) => {
    axios
        .get(`/api/sponsors/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SPONSOR,
                payload: res.data
            });
        }).catch(err => console.log(err));

};

//UPDATE SPONSOR
// export const updateSponsor = (sponsor) => (dispatch, getState) => {
//     axios.put(`/api/sponsors/${sponsor.id}/`, sponsor, tokenConfig(getState))
//     .then(res => {
//             dispatch(createMessage({sponsorUpdated: "Sponsor Updated"}));
//             dispatch({
//                 type: UPDATE_SPONSOR,
//                 payload: res.data
//             });
//         })
//         .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
// };

export const updateSponsor = (sponsor) => (dispatch, getState) => {
    axios.put(`/api/sponsors/${sponsor.id}/`, sponsor, tokenConfig(getState))
    .then(res => {
            dispatch(createMessage({sponsorUpdated: "Sponsor Updated"}));
            getSponsors();
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//GET SPONSORGROUPS
export const getSponsorGroups = () => (dispatch, getState) => {
    axios.get('/api/sponsorgroups', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SPONSORGROUPS,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

//GET SPONSORGROUP
export const getSponsorGroup = (id) => (dispatch, getState) => {
    axios.get(`/api/sponsorgroups/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_SPONSORGROUP,
                payload: res.data
            });
        }).catch(err => console.log(err));
};