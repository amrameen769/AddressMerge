import { combineReducers } from "redux";
import sponsorsReducer from "./sponsorsReducer";

export default combineReducers({
    sponsors: sponsorsReducer
});
