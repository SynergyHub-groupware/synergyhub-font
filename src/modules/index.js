import { combineReducers } from "redux";
import postReducer from "../pages/post/module/PostReducer";

const rootReducer = combineReducers({
post:postReducer
});

export default rootReducer;