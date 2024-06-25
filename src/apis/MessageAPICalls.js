import { getRevMsg, getSendMsg } from "../modules/MessageModules";
import { request } from "./api";

export const callRevMsgListAPI = () => {
    
    return async (dispatch, getState) => {

        try {
            const result = await request('GET', '/emp/message/receive', {
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
                'Content-Type': 'application/json'
            });

            console.log('callAPI result : ', result);

            if (result && result.status === 200) {

                dispatch(getRevMsg(result.data));
            } else {
                console.log('에러에옹 : ', result);
            }
        } catch (error) {
            console.log("또 에러에옹 : ", error);
        }
        
    };
};

export const callSendMsgListAPI = () => {

    return async (dispatch, getState) => {

        try {
            const result = await request('GET', '/emp/message/send', {
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
                'Content-Type': 'application/json'
            });

            console.log('callAPI result : ' , result);

            if (result && result.status === 200) {
                dispatch(getSendMsg(result.data));
            } else {
                console.log('에러에옹 : ', result);
            }
        } catch (error) {
            console.log('또 에러에옹 : ', error);
        }
    };
};