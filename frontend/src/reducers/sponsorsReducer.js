import {GET_SPONSORS, DELETE_SPONSOR, GET_SPONSOR, ADD_SPONSOR, ADD_SPONSORGROUP} from "../actions/types";
import {GET_SPONSORGROUP, GET_SPONSORGROUPS} from "../actions/types";
import {act} from "react-dom/test-utils";

const initialState = {
    sponsors: [],
    sponsorgroups: [],
    sponsor:[],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SPONSORS:
            return {
                ...state,
                sponsors: action.payload
            };
        case DELETE_SPONSOR:
            return {
                ...state,
                sponsors: state.sponsors.filter(
                    sponsor => sponsor.id !== action.payload
                )
            };
        case ADD_SPONSOR:
            return {
                ...state,
                sponsors: [...state.sponsors, action.payload]
            };
        case GET_SPONSOR:
            return {
                ...state,
                sponsor: action.payload
            };

        case ADD_SPONSORGROUP:
            return {
                ...state,
                sponsorgroups: [...state.sponsorgroups, action.payload]
            };
        case GET_SPONSORGROUPS:
            return {
                ...state,
                sponsorgroups: action.payload
            };
        case GET_SPONSORGROUP:
            return {
                ...state,
                sponsorgroup: action.payload
            };

        default:
            return state;
    }
}
