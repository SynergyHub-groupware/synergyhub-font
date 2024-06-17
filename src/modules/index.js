import { combineReducers } from "redux";
import postReducer from "../pages/post/module/PostReducer";

import approvalReducer from "./ApprovalModules";

const rootReducer = combineReducers({
    post:postReducer,approvalReducer
});

export default rootReducer;