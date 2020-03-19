import {ADD_FUND, DELETE_FUND, UPDATE_FUND, GET_FUNDS} from "../actions/types";

const initialState = {
    donations: []
};

export default function donationsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FUNDS:
            return {
                ...state,
                donations: action.payload
            };
        case ADD_FUND:
            return {
                ...state,
                donations: [...state.donations, action.payload]
            };
        case DELETE_FUND:
            return {
                ...state,
                donations: state.donations.filter(
                    donation => donation.id !== action.payload
                )
            };
        default:
            return state;
    }
}