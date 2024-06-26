import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = {
    messages: []
};

/* 액션 타입 */
const GET_REV_MSG = 'message/GET_REV_MSG';
const GET_SEND_MSG = 'message/GET_SEND_MSG';
const GET_BIN_MSG = 'message/GET_BIN_MSG';
const GET_IMP_MSG = 'message/GET_IMP_MSG';
const GET_WORK_MSG = 'message/GET_WORK_MSG';
const DEL_MSG = 'message/DEL_MSG';

/* 액션 함수 */
export const { message : { getRevMsg }, message : { getSendMsg }, message : { getBinMsg },
                message : { getImpMsg }, message : { getWorkMsg }, message : { delMsg }} = createActions({
    [GET_REV_MSG] : result => {
        console.log('action : ', result);

        return {message: result};
    },

    [GET_SEND_MSG] : result => {
        console.log('action : ', result);

        return {message: result};
    },

    [GET_BIN_MSG] : result => {
        console.log('action : ', result);

        return {message: result};
    },

    [GET_IMP_MSG] : result => {
        console.log('action : ', result);

        return {message: result};
    },

    [GET_WORK_MSG] : result => {
        console.log('action : ', result);

        return {message: result};
    },

    [DEL_MSG] : msgCode => {
        console.log('del action : ', msgCode);

        return { msgCode };
    }

}, initialState);


/* 리듀서 */
const messageReducer = handleActions({
    [GET_REV_MSG] : (state, {payload}) => {
        console.log("reducer : ", payload);

        return {
            ...state,
            messages: payload
        };
    },

    [GET_SEND_MSG] : (state, {payload}) => {
        console.log("reducer : ", payload);

        return {
            ...state,
            messages: payload
        };
    },

    [GET_BIN_MSG] : (state, {payload}) => {
        console.log("reducer : ", payload);

        return {
            ...state,
            messages: payload
        }
    },

    [GET_IMP_MSG] : (state, {payload}) => {
        console.log("reducer : ", payload);

        return {
            ...state,
            messages: payload
        }
    },

    [GET_WORK_MSG] : (state, {payload}) => {
        console.log("reducer : ", payload);

        return {
            ...state,
            messages: payload
        }
    },

    [DEL_MSG] : (state, {payload}) => {
        console.log("del reducer : ", payload);

        return {
            ...state,
            messages: state.messages.map(msg =>
                msg.msgCode === payload.msgCode ? { ...msg, storCode: 5 } : msg
            )
        }
    }

}, initialState);

export default messageReducer;