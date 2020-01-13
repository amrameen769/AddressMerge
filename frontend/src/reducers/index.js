import { combineReducers } from "redux";
import sponsorsReducer from "./sponsorsReducer";
import errorsReducer from "./errorsReducer";
import messageReducer from "./messageReducer";

export default combineReducers({
    sponsors: sponsorsReducer,
    errors: errorsReducer,
    messages: messageReducer
});
