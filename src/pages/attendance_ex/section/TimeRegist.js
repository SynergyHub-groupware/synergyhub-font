import React, { useState, useEffect } from 'react';
import AttendanceCheckInButton from './AttendanceCheckInButton';
import TimeDisplay from "../util/TimeDisplay";

const TimeRegistSection = ({ empCode, isCheckedIn, handleCheckInOutSuccess }) => {

    const [attendanceData, setAttendanceData] = useState({
        startTime: null,
        endTime: null
    });

    useEffect(() => {
        const fetchAttendanceTimes = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/attendance/today/${empCode}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                    }
                });

                if (!response.ok) {
                    throw new Error('데이터를 불러오는데 실패했습니다.');
                }

                const data = await response.json();
                const { startTime, endTime } = data.results.attendances;
                setAttendanceData({ startTime, endTime });
            } catch (error) {
                console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
            }
        };

        if (empCode) { // empCode가 유효한 경우에만 요청을 보냅니다.
            fetchAttendanceTimes();
        }
    }, [empCode, isCheckedIn]);

    const formatTime = (time) => {
        if (!time) return '정보없음';
        const today = new Date();
        const isoDate = today.toISOString().split('T')[0]; // ISO 형식에서 시간 부분은 제외하고 날짜 부분만 추출
        const date = new Date(`${isoDate}T${time}`);
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const ampm = hours >= 12 ? '오후' : '오전';
        hours = hours % 12;
        hours = hours ? hours : 12; // 0을 12로 변환
        const strTime = `${ampm} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        return strTime;
    };

    return (
        <section className="bl_sect hp_padding30 hp_w400px el_shadowD4 hp_mb30">
            <div className="hp_fw700">2024년 06월 20일</div>
            <div className="ly_spaceBetween ly_fitemC hp_mt5">
                <div className="hp_fw700 hp_fs28">
                    <TimeDisplay/>
                </div>
                <ul className="hp_alignR">
                    <li className=""><b className="hp_fw700 hp_mr10">출근 시간</b>{formatTime(attendanceData.startTime)}</li>
                    <li className=""><b className="hp_fw700 hp_mr10">퇴근 시간</b>{formatTime(attendanceData.endTime)}</li>
                </ul>
            </div>
            <AttendanceCheckInButton empCode={empCode} isCheckedIn={isCheckedIn}
                                     onCheckInOutSuccess={handleCheckInOutSuccess}/>
        </section>
    );
};

export default TimeRegistSection;
