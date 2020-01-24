import { combineReducers } from "redux";
import sponsorsReducer from "./sponsorsReducer";
import errorsReducer from "./errorsReducer";
import messageReducer from "./messageReducer";
import authReducer from "./authReducer";

export default combineReducers({
    sponsors: sponsorsReducer,
    errors: errorsReducer,
    messages: messageReducer,
    authentication: authReducer,
});
