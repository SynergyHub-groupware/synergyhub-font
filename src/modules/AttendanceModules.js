import { createActions, handleActions } from 'redux-actions';

// 초기 상태 정의
const initialState = {
    employee: {},
    attendances: []
};

// 액션 타입 정의
const GET_MY_INFO = 'employee/GET_MY_INFO';
const GET_ATTENDANCE_FOR_WEEK = 'attendance/GET_ATTENDANCE_FOR_WEEK';

// 액션 함수 생성
const actions = createActions({
    [GET_MY_INFO]: (employee) => ({ employee }),
    [GET_ATTENDANCE_FOR_WEEK]: (attendances) => ({ attendances })
});

// 내보내기
export const { employee: { getMyInfo }, attendance: { getAttendanceForWeek } } = actions;

// 리듀서 함수 정의
const attendanceReducer = handleActions({
    [GET_MY_INFO]: (state, { payload }) => ({
        ...state,
        employee: payload.employee,
    }),
    [GET_ATTENDANCE_FOR_WEEK]: (state, { payload }) => ({
        ...state,
        attendances: payload.attendances
    }),
}, initialState);

export default attendanceReducer;
