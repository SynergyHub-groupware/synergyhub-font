import { combineReducers } from "redux";
import postReducer from "../pages/post/module/PostReducer";

import approvalReducer from "./ApprovalModules";
import loginReducer from "./LoginModules";
import messageReducer from "./MessageModules";
import employeeReducer from './EmployeeModules';

const rootReducer = combineReducers({
    post:postReducer,
    approvalReducer,
    loginReducer,
    messageReducer,
    employeeReducer

});

export default rootReducer;