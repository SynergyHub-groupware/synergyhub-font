import { legacy_createStore , applyMiddleware} from "redux";
import rootReducer from "./modules";
import { tunckMiddleware } from "./pages/post/module/PostReducer";
import {thunk} from 'redux-thunk';

const store = legacy_createStore(
    rootReducer, applyMiddleware(thunk)


);

export default store;