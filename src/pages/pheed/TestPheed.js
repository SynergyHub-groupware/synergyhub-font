import React, { useState, useEffect } from 'react';
import { format } from 'date-fns'; // date-fns 라이브러리 사용

const PheedBox = ({ pheed }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
            <div><strong>피드 내용:</strong> {pheed.pheedCon}</div>
            <div><strong>생성 시간:</strong> {format(new Date(pheed.creStatus), 'yyyy-MM-dd HH:mm:ss')}</div>
            <div><strong>읽음 상태:</strong> {pheed.readStatus}</div>
            <div><strong>삭제 상태:</strong> {pheed.deStatus}</div>
            <div><strong>피드 분류:</strong> {pheed.pheedSort}</div>
            <div><strong>사원 이름:</strong> {pheed.employee.empName}</div>
        </div>
    );
};

const TestPheed = () => {
    const [pheedList, setPheedList] = useState([]);

    useEffect(() => {
        const eventSource = new EventSource('http://localhost:8080/api/pheed/subscribe', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        });

        eventSource.onopen = () => {
            console.log('Connection to /api/pheed/subscribe has been established.');
        };

        eventSource.onmessage = event => {
            const data = JSON.parse(event.data);
            console.log('Received new pheed:', data);
            setPheedList([data, ...pheedList]); // 새로운 피드를 리스트의 맨 앞에 추가
        };

        eventSource.onerror = error => {
            console.error('EventSource failed:', error);
        };

        return () => {
            eventSource.close();
        };
    }, []); // []를 빈 배열로 전달하여 한 번만 실행되도록 합니다.

    return (
        <div>
            <h2>실시간 피드 업데이트</h2>
            {pheedList.map((pheed, index) => (
                <PheedBox key={pheed.pheedCode} pheed={pheed} />
            ))}
        </div>
    );
};

export default TestPheed;
