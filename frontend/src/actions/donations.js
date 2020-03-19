import axios from 'axios';
import {createMessage, returnErrors} from "./messagesAction";
import {tokenConfig} from "./authentication";
import {ADD_FUND, DELETE_FUND, UPDATE_FUND, GET_FUNDS} from "../actions/types";

//GET FUNDS
export const getFunds = () => (dispatch, getState) => {
    axios.get("/api/donations/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_FUNDS,
                payload: res.data
            })
        })
        .catch(err=>dispatch(returnErrors(err.response.data, err.response.status)));
};

//ADD FUND
export const addFund = (fund) => (dispatch, getState) => {
    axios.post("/api/donations/", fund, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({donationAdded: "Donation Added"}));
            dispatch({
                type: ADD_FUND,
                payload: res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//UPDATE FUND
export const updateFund = (fund) => (dispatch, getState) => {
    axios.put(`/api/donations/${fund.id}/`, fund, tokenConfig(getState))
    .then(res => {
            dispatch(createMessage({donationUpdated: "Donation Updated"}));
            getFunds();
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//DELETE FUND
export const deleteFund = (id) => (dispatch, getState) =>{
    axios
        .delete(`/api/donations/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({donationDeleted: "Donation Deleted!"}));
            dispatch({
                type: DELETE_FUND,
                payload: id
            });
        })
        .catch(err => console.log(err));
};
