import { request } from './api';
import { getDepartments, getDeptEmployees, getMyInfo, getRecordcard } from '../modules/EmployeeModules';

export const callDepartmentEmployeesAPI = () => {

    return async (dispatch, getState) => {

        try{
            const result = await request('GET', '/employee/employeeList', {
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
                'Content-Type': 'application/json'
            });

            console.log('callDepartmentEmployeesAPI result : ', result);

            if(result && result.status === 200) {

                dispatch(getDeptEmployees(result.data));
                
            } else {
                console.error('팀원 정보 조회 실패 : ', result);
            }
        } catch (error) {
            console.error('팀원 정보 조회 실패 : ', error);
        }
    };
};

export const callMyInfoAPI = () => {

    return async (dispatch, getState) => {

        try {
            const result = await request('GET', '/employee/myInfo', {
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
                'Content-Type': 'application/json'
            });
            // 이다정: 주석처리
            // console.log('callMyInfoAPI result : ', result);

            if(result && result.status === 200) {

                dispatch(getMyInfo(result.data));
            } else {
                console.log('내정보 조회 실패 result : ', result);
            }
        } catch (error) {
            console.log('내정보 조회 실패 error : ', error);
        }
    };
};


export const callRecordCardAPI = () => {

    return async (dispatch, getState) => {

        try {
            const result = await request('GET', '/employee/recordCard', {
                'Authorization': `Bearer ${localStorage.getItem('access-token')}`,
                'Content-Type': 'application/json'
            });

            console.log('callRecordCardAPI result: ', result);

            if(result && result.status === 200) {
                
                console.log('Dispatching getRecordCard with data: ', result.data); // 디버깅용 로그

                dispatch(getRecordcard(result.data));

            } else {

                console.log('인사기록카드 조회 실패(result)', result);

            }
        } catch(error) {

            console.error('인사기록카드 조회 실패(error)', error)
        }
    };
};

export const callDepartmentsAPI = () => {
 
    return async (dispatch, getState) => {

        try {
            const result = await request('GET', '/employee/departments',);

            console.log('callDepartmentsAPI result: ', result);

            if(result && result.status === 200) {

                console.log('Dispatching getDepartments with data: ', result.data);

                dispatch(getDepartments(result.data));

            } else {

                console.log('부서목록 조회 실패(result): ', result);
            }
        } catch(error) {
            console.error('부서목록 조회 실패(error): ', error);
        }
    };
};