import React from 'react';
import axios from 'axios';

function AttendanceCheckInButton({ empCode }) {
    const handleCheckIn = async () => {
        try {
            const response = await axios.put(`/api/attendance/registStartTime/${empCode}`);
            console.log('출근 시간 등록 성공:', response.data);
            // 성공 시 추가로 수행할 작업을 여기에 작성
        } catch (error) {
            console.error('출근 시간 등록 실패:', error);
            // 실패 시 추가로 수행할 작업을 여기에 작성
        }
    };

    return (
        <button onClick={handleCheckIn}>
            출근하기
        </button>
    );
}

export default AttendanceCheckInButton;