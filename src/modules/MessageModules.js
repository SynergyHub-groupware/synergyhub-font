import { createActions, handleActions } from "redux-actions";

/* 초기값 */
const initialState = {
    messages: []
};

/* 액션 타입 */
const GET_REV_MSG = 'message/GET_REV_MSG';


/* 액션 함수 */
export const { message : { getRevMsg }} = createActions({
    [GET_REV_MSG] : messages => ({ messages })
}, initialState);


/* 리듀서 */
const messageReducer = handleActions({
    [GET_REV_MSG] : (state, {payload}) => ({
        ...state,
        messages: payload.messages
    })
}, initialState);

export default messageReducer;