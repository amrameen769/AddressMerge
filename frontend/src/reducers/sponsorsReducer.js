import {GET_SPONSORS, DELETE_SPONSOR, EDIT_SPONSOR, ADD_SPONSOR} from "../actions/types.js";
import {GET_SPONSORGROUPS} from "../actions/types";
import {act} from "react-dom/test-utils";

const initialState = {
    sponsors: [],
    sponsorgroups: [],
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
        case EDIT_SPONSOR:
            return {
                ...state,
                sponsors: action.payload
            };
        case GET_SPONSORGROUPS:
            return {
                ...state,
                sponsorgroups: action.payload
            };

        default:
            return state;
    }
}
