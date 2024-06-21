import { combineReducers } from "redux";
import approvalReducer from "./ApprovalModules";
import loginReducer from "./LoginModules";
import messageReducer from "./MessageModules";

const rootReducer = combineReducers({
    approvalReducer,
    loginReducer,
    messageReducer
});

export default rootReducer;