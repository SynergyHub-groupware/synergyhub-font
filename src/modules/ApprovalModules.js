import { createActions, handleActions } from "redux-actions";

const initialState = {
    forms: [],
    lines: [],
    lineemps: []
};

const GET_FORMS = 'approval/GET_FORMS';
const GET_LINES = 'approval/GET_LINES';
const GET_LINEEMPS = 'approval/GET_LINEEMPS';

export const { approval: { getForms, getLines, getLineemps } } = createActions({
    [GET_FORMS]: result => ({ forms: result.data }),
    [GET_LINES]: result => ({ lines: result.data }),
    [GET_LINEEMPS]: result => ({ lineemps: result.data }),
});

const approvalReducer = handleActions({
    [GET_FORMS]: (state, { payload }) => ({
        ...state,
        forms: payload.forms
    }),
    [GET_LINES]: (state, { payload }) => ({
        ...state,
        lines: payload.lines
    }),
    [GET_LINEEMPS]: (state, { payload }) => ({
        ...state,
        lineemps: payload.lineemps
    })
}, initialState);

export default approvalReducer;
