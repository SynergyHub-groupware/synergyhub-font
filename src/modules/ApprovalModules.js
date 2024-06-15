import { createActions, handleActions } from "redux-actions";

const initialState = {
    forms: [],
    lines: [],
    lineemps: [],
    sign: '',
};

const GET_FORMS = 'approval/GET_FORMS';
const GET_LINES = 'approval/GET_LINES';
const GET_LINEEMPS = 'approval/GET_LINEEMPS';
const GET_SIGN = 'approval/GET_SIGN';

export const { approval: { getForms, getLines, getLineemps, getSign } } = createActions({
    [GET_FORMS]: result => ({ forms: result.data }),
    [GET_LINES]: result => ({ lines: result.data }),
    [GET_LINEEMPS]: result => ({ lineemps: result.data }),
    [GET_SIGN]: result => ({sign: result.data}),
});

const approvalReducer = handleActions({
    [GET_FORMS]: (state, { payload }) => ({...state, forms: payload.forms}),
    [GET_LINES]: (state, { payload }) => ({...state, lines: payload.lines}),
    [GET_LINEEMPS]: (state, { payload }) => ({...state, lineemps: payload.lineemps}),
    [GET_SIGN]: (state, {payload}) => ({...state, sign: payload.sign}),
}, initialState);

export default approvalReducer;
