import { GET_SPONSORS, DELETE_SPONSOR } from "../actions/types.js";

const initialState = {
    sponsors: []
};

export default function(state = initialState, action) {
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

        default:
            return state;
    }
}
