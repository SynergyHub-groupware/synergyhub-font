import React, { useState } from 'react';

function Schedule() {
    const [formData, setFormData] = useState({
        deptTitle: 'D1',
        atdStartTime: '09:00:00',
        atdEndTime: '18:00:00'
    });

    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const registSchedule = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/attendance/registSchedule', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    employee: null
                })
            });

            const responseData = await response.json();

            // Check if the status is 409 (Conflict)
            if (response.status === 409) {
                alert(`${responseData.message}`);
            } else {
                setResponseMessage(`응답: ${JSON.stringify(responseData)}`);
            }
        } catch (error) {
            console.error('에러 발생:', error);
            setResponseMessage(`${error.message}`);
        }
    };

    return (
        <div>
            <h2>출퇴근시간 등록</h2>
            <form id="scheduleForm">
                <label htmlFor="deptTitle">부서 제목:</label><br/>
                <input
                    type="text"
                    id="deptTitle"
                    name="deptTitle"
                    value={formData.deptTitle}
                    onChange={handleChange}
                /><br/><br/>

                <label htmlFor="atdStartTime">출근 시간 (HH:mm:ss):</label><br/>
                <input
                    type="text"
                    id="atdStartTime"
                    name="atdStartTime"
                    value={formData.atdStartTime}
                    onChange={handleChange}
                /><br/><br/>

                <label htmlFor="atdEndTime">퇴근 시간 (HH:mm:ss):</label><br/>
                <input
                    type="text"
                    id="atdEndTime"
                    name="atdEndTime"
                    value={formData.atdEndTime}
                    onChange={handleChange}
                /><br/><br/>

                <button type="button" onClick={registSchedule}>출퇴근시간 등록</button>
            </form>
            <div id="response">
                <p>{responseMessage}</p>
            </div>
        </div>
    );
}

export default Schedule;
