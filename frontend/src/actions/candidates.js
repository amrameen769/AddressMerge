import axios from 'axios';
import {createMessage, returnErrors} from "./messagesAction";
import {tokenConfig} from "./authentication";
import {
    GET_CANDIDATES,
    GET_CANDIDATECATEGORY,
    DELETE_CANDIDATE,
    ADD_CANDIDATE, ADD_CANDIDATECATEGORY
} from "./types";

//GET CANDIDATES
export const getCandidates = () => (dispatch, getState) =>{
    axios.get('/api/candidates/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_CANDIDATES,
                payload: res.data
            });
        })
        .catch(err=>dispatch(returnErrors(err.response.data, err.response.status)));
};

//GET CANDIDATE CATEGORY
export const getCandidateCategory = () => (dispatch, getState) => {
    axios.get('/api/candidatecategory', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_CANDIDATECATEGORY,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

//ADD CANDIDATE
export const addCandidate = (candidate) => (dispatch, getState) => {
    axios
        .post("/api/candidates/", candidate, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({candidateAdded: "Candidate Added"}));
            dispatch({
                type: ADD_CANDIDATE,
                payload: res.data
            });
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//DELETE CANDIDATE
export const deleteCandidate = id => (dispatch, getState) => {
    axios
        .delete(`/api/candidates/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({candidateDeleted: "Candidate Deleted!"}));
            dispatch({
                type: DELETE_CANDIDATE,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

//UPDATE CANDIDATE
export const updateCandidate = (candidate) => (dispatch, getState) => {
    axios.put(`/api/candidates/${candidate.id}/`, candidate, tokenConfig(getState))
    .then(res => {
            dispatch(createMessage({candidateUpdated: "Candidate Updated"}));
            getCandidates();
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

//ADD CANDIDATECATEGORY
export const addCandidateCategory = (candidatecategory) => (dispatch, getState) => {
    axios.post('/api/candidatecategory/', candidatecategory, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({candidateCategoryUpdated: "Candidate Categories Updated"}));
            dispatch({
                type: ADD_CANDIDATECATEGORY,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
