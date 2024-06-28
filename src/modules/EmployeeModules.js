import { createActions, handleActions } from 'redux-actions';

/* 초기값 */
const initialState = {
    employees: [],
    employee: {},
    recordCard: {},
    departments: [],
    titles: [],
};

/* 액션 타입 */
const GET_DEPT_EMPLOYEES = 'employee/GET_DEPT_EMPLOYEES';
const GET_MY_INFO = 'employee/GET_MY_INFO';
const GET_RECORDCARD = 'employee/GET_RECORDCARD';
const GET_DEPARTMENTS = 'employee/GET_DEPARTMENTS';
const GET_TITLES = 'employee/GET_TITLES';

/* 액션 함수 */
export const { employee : { getDeptEmployees, getMyInfo, getRecordcard, getDepartments, getTitles } } = createActions ({
    [GET_DEPT_EMPLOYEES] : result => {

        console.log('Action payload:', result);

        return {employees: result};

    },
    [GET_MY_INFO] : result => {
        // 이다정: 주석처리
        // console.log('Action payload', result);

        return {employee: result};
    },
    [GET_RECORDCARD] : result => {

        console.log('Action payload : ', result);

        return {recordCard: result};
    },
    [GET_DEPARTMENTS] : result => {

        console.log('Action payload:', result);

        return {departments: result};

    },
    [GET_TITLES] : result => {
        return {titles: result};
    }
});

/* 리듀서 함수 */
const employeeReducer = handleActions({

    [GET_DEPT_EMPLOYEES] : (state, { payload }) => {

        console.log('Reducer GET_DEPT_EMPLOYEES payload: ', payload);

        return {
            ...state,
            employees: payload.employees,

        };
    },
    [GET_MY_INFO] : (state, { payload }) => {

        // 이다정: 주석처리
        // console.log('Reducer GET_MY_INFO payload', payload);

        return {
            ...state,
            employee: payload.employee,
        };
    },
    [GET_RECORDCARD] : ( state, { payload }) => {

        console.log('Reducer GET_RECORDCARD payload : ', payload);

        return {
            ...state,
            recordCard: payload.recordCard,
        };
    },
    [GET_DEPARTMENTS] : ( state, { payload }) => {

        console.log('Reducer GET_DEPARTMENS payload:', payload);

        return {
            ...state,
            departments: payload.departments,
        };
    },
    [GET_TITLES] : (state, {payload}) => {
        return {
            ...state,
            titles: payload.titles,
        };
    },

}, initialState);

export default employeeReducer;