import { combineReducers } from "redux";
import sponsorsReducer from "./sponsorsReducer";
import errorsReducer from "./errorsReducer";
import messageReducer from "./messageReducer";
import authReducer from "./authReducer";
import candidatesReducer from "./candidatesReducer";
import donationsReducer from "./donationsReducer";


export default combineReducers({
    sponsors: sponsorsReducer,
    errors: errorsReducer,
    messages: messageReducer,
    authentication: authReducer,
    candidates: candidatesReducer,
    donations: donationsReducer
});
