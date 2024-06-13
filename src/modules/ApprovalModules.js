import {createActions, handleActions} from "redux-actions";

const initialState = {};

const GET_FORMS = 'form/GET_FORMS';
const GET_FORM = 'form/GET_FORM';

export const {form: {getForms, getForm}} = createActions({
    [GET_FORMS]: result => ({forms: result.data}),
    [GET_FORM]: result => ({form: result.data})
})

const approvalReducer = handleActions({
    [GET_FORMS]: (state, {payload}) => payload,
    [GET_FORM]: (state, {payload}) => payload
}, initialState);

export default approvalReducer;