import { getRevMsg } from "../modules/MessageModules";
import { request } from "./api";

export const callRevMsgListAPI = () => {
    console.log("api 들어감")
    return async (dispatch, getState) => {
            const result = await request('GET', '/emp/message/receive');
            console.log("result : ", result);

            if(result && result.status === 200) {
                console.log("200");
                dispatch(getRevMsg(result.data));
            } else {
                console.log("에러났따");
                console.log("error : " , result ? result.status : '응답x');
            }
    };
};