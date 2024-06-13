import {getForms, getLines} from "../modules/ApprovalModules";
import { request } from "./api";

export const callFormListAPI = () => {
    return async (dispatch, getState) => {
        const result = await request('GET', '/approval/formList');
        console.log("result", result);
        if(result && result.status === 200) dispatch(getForms(result));
    }
}

export const callFormLineAPI = ({lsCode}) => {
    return async (dispatch, getState) => {
        const result = await request('GET', `/approval/form/${lsCode}`);
        if(result && result.status === 200) dispatch(getLines(result));
    }
}