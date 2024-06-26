// AttendanceCheckInButton.js

import React, { useState } from 'react';

const AttendanceCheckInButton = ({ empCode, isCheckedIn, onCheckInOutSuccess }) => {
    const [loading, setLoading] = useState(false);

    const handleCheckInOut = async () => {
        setLoading(true);
        const endpoint = isCheckedIn ? `registEndTime/${empCode}` : `registStartTime/${empCode}`;

        try {
            const response = await fetch(`http://localhost:8080/api/attendance/${endpoint}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emp_code: empCode
                })
            });

            if (!response.ok) {
                throw new Error(isCheckedIn ? '퇴근시간 등록에 실패했습니다.' : '출근시간 등록에 실패했습니다.');
            }

            const responseData = await response.json();
            alert(isCheckedIn ? '퇴근시간이 등록되었습니다.' : '출근시간이 등록되었습니다.');
            onCheckInOutSuccess(); // 출근 또는 퇴근 성공 시 상태 업데이트 호출
        } catch (error) {
            console.error(`출퇴근 처리 중 오류가 발생했습니다. (${error.message})`);
            alert(`출퇴근 처리 중 오류가 발생했습니다. (${error.message})`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button type="button" className="el_btn0Back el_btnF hp_mt20 hp_fs16" onClick={handleCheckInOut} disabled={loading}>
            {loading ? '처리 중...' : isCheckedIn ? '퇴근하기' : '출근하기'}
        </button>
    );
};

export default AttendanceCheckInButton;
