import { createActions, handleActions } from "redux-actions";

const initialState = {
    forms: [],
    lines: [],
    lineemps: [],
    success: null,
    content: null,
    documents: [],
    viewlines: [],
};

const GET_FORMS = 'approval/GET_FORMS';
const GET_LINES = 'approval/GET_LINES';
const GET_LINEEMPS = 'approval/GET_LINEEMPS';
const GET_SUCCESS = 'approval/GET_SUCCESS';
const RESET_SUCCESS = 'approval/RESET_SUCCESS';
const GET_CONTENT = 'approval/GET_CONTENT';
const RESET_CONTENT = 'approval/RESET_CONTENT';
const GET_DOCUMENTS = 'approval/GET_DOCUMENTS';
const GET_VIEWLINES = 'approval/GET_VIEWLINES';

export const {approval: {getForms, getLines, getLineemps, getSuccess, resetSuccess, getContent, getDocuments, getViewlines, resetContent}} = createActions({
    [GET_FORMS]: result => ({ forms: result.data }),
    [GET_LINES]: result => ({ lines: result.data }),
    [GET_LINEEMPS]: result => ({ lineemps: result.data }),
    [GET_SUCCESS]: result => ({ success: result }),
    [RESET_SUCCESS]: () => ({ success: null }),
    [GET_CONTENT]: result => ({content: result.data}),
    [RESET_CONTENT]: () => ({ content: null }),
    [GET_DOCUMENTS]: result => ({documents: result.data}),
    [GET_VIEWLINES]: result => ({viewlines: result.data}),
});

const approvalReducer = handleActions({
    [GET_FORMS]: (state, { payload }) => ({...state, forms: payload.forms}),
    [GET_LINES]: (state, { payload }) => ({...state, lines: payload.lines}),
    [GET_LINEEMPS]: (state, { payload }) => ({...state, lineemps: payload.lineemps}),
    [GET_SUCCESS]: (state, { payload }) => ({...state, success: payload.success}),
    [RESET_SUCCESS]: (state, action) => ({...state, success: null}),
    [GET_CONTENT]: (state, {payload}) => ({...state, content: payload.content}),
    [RESET_CONTENT]: (state, action) => ({...state, content: null}),
    [GET_DOCUMENTS]: (state, {payload}) => ({...state, documents: payload.documents}),
    [GET_VIEWLINES]: (state, {payload}) => ({...state, viewlines: payload.viewlines}),
}, initialState);

export default approvalReducer;
