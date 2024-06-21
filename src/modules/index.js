import { combineReducers } from "redux";
import approvalReducer from "./ApprovalModules";
import loginReducer from "./LoginModules";
import employeeReducer from './EmployeeModules';

const rootReducer = combineReducers({
    approvalReducer,
    loginReducer,
    employeeReducer
});

export default rootReducer;