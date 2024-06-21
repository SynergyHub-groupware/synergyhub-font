import { combineReducers } from "redux";
import postReducer from "../pages/post/module/PostReducer";

import approvalReducer from "./ApprovalModules";
import loginReducer from "./LoginModules";
import employeeReducer from './EmployeeModules';

const rootReducer = combineReducers({
    post:postReducer,
    approvalReducer,
    loginReducer,
    employeeReducer
});

export default rootReducer;