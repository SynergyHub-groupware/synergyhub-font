import {getForms} from "../modules/ApprovalModules";
import { request } from "./api";

export const callFormListAPI = () => {
    return async (dispatch, getState) => {
        const result = await request('GET', '/approval/formList');

        if(result && result.status === 200) dispatch(getForms(result));
    }
}