import { Outlet } from "react-router-dom";
import AttendanceNav from "../../components/commons/AttendanceNav";
import React from 'react';
import AttendanceCheckInButton from './api/AttendanceCheckInButton';

function AttendanceLayout(){

    const empCode = 2020021;

    return(
        <>
            <AttendanceNav/>
            <Outlet/>
            <div>
                <AttendanceCheckInButton empCode={empCode}>출근하기</AttendanceCheckInButton>
            </div>
        </>
    )
}
export default AttendanceLayout;