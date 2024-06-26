import { combineReducers } from "redux";
import approvalReducer from "./ApprovalModules";
import loginReducer from "./LoginModules";
import calendarReducer from "./CalendarModules";

const rootReducer = combineReducers({
    approvalReducer,
    loginReducer,
    calendarReducer
});

export default rootReducer;