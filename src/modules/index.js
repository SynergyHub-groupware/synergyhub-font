import { combineReducers } from "redux";
import approvalReducer from "./ApprovalModules";
import loginReducer from "./LoginModules";

const rootReducer = combineReducers({
    approvalReducer,
    loginReducer
});

export default rootReducer;