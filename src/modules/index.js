import { combineReducers } from "redux";
import approvalReducer from "./ApprovalModules";
import loginReducer from "./LoginModules";
import messageReducer from "./MessageModules";
import employeeReducer from './EmployeeModules';

const rootReducer = combineReducers({
    approvalReducer,
    loginReducer,
    messageReducer,
    employeeReducer

});

export default rootReducer;