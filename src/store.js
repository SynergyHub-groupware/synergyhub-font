import { legacy_createStore } from "redux";
import rootReducer from "./modules";

const store = legacy_createStore(
    rootReducer
);

export default store;