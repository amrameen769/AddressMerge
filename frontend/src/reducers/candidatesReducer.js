import {ADD_CANDIDATE, DELETE_CANDIDATE, GET_CANDIDATECATEGORY, GET_CANDIDATES} from "../actions/types";

const initialState = {
    candidates: [],
    candidatecategory: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CANDIDATES:
            return {
                ...state,
                candidates: action.payload
            };
        case ADD_CANDIDATE:
            return {
                ...state,
                candidates: [...state.candidates, action.payload]
            };
        case GET_CANDIDATECATEGORY:
            return {
                ...state,
                candidatecategory: action.payload
            };
        case DELETE_CANDIDATE:
            return {
                ...state,
                candidates: state.candidates.filter(
                    candidate => candidate.id !== action.payload
                )
            };
        default:
            return state;
    }
}