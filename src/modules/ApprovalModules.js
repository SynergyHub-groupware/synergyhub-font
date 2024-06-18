import { createActions, handleActions } from "redux-actions";

const initialState = {
    forms: [],
    lines: [],
    lineemps: [],
    success: null,
};

const GET_FORMS = 'approval/GET_FORMS';
const GET_LINES = 'approval/GET_LINES';
const GET_LINEEMPS = 'approval/GET_LINEEMPS';
const GET_SUCCESS = 'approval/GET_SUCCESS';


export const { approval: { getForms, getLines, getLineemps, getSuccess } } = createActions({
    [GET_FORMS]: result => ({ forms: result.data }),
    [GET_LINES]: result => ({ lines: result.data }),
    [GET_LINEEMPS]: result => ({ lineemps: result.data }),
    [GET_SUCCESS]: result => ({ success: result }),
});

const approvalReducer = handleActions({
    [GET_FORMS]: (state, { payload }) => ({...state, forms: payload.forms}),
    [GET_LINES]: (state, { payload }) => ({...state, lines: payload.lines}),
    [GET_LINEEMPS]: (state, { payload }) => ({...state, lineemps: payload.lineemps}),
    [GET_SUCCESS]: (state, { payload }) => ({...state, success: payload.success}),
}, initialState);

export default approvalReducer;
