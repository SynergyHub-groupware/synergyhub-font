import {createActions, handleActions} from "redux-actions";

const initialState = {};

const GET_FORMS = 'form/GET_FORMS';
const GET_FORM = 'form/GET_FORM';
const GET_LINES = 'form/GET_LINES';
const GET_LINE = 'form/GET_LINE';

export const {form: {getForms, getForm, getLines, getLine}} = createActions({
    [GET_FORMS]: result => ({forms: result.data}),
    [GET_FORM]: result => ({form: result.data}),
    [GET_LINES]: result => ({lines: result.data}),
    [GET_LINE]: result => ({line: result.data})
})

const approvalReducer = handleActions({
    [GET_FORMS]: (state, {payload}) => payload,
    [GET_FORM]: (state, {payload}) => payload,
    [GET_LINES]: (state, {payload}) => payload,
    [GET_LINE]: (state, {payload}) => payload
}, initialState);

export default approvalReducer;