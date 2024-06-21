import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EventSourcePolyfill } from 'event-source-polyfill';

const PheedComponent = () => {
    const [pheeds, setPheeds] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [lastEventId, setLastEventId] = useState("");
    const token = localStorage.getItem('access-token');
    const sseURL = "http://localhost:8080/api/pheed/subscribe";

    useEffect(() => {
        // Fetch initial pheeds from REST API
        fetchPheeds();

        // Setup SSE connection
        const eventSource = new EventSourcePolyfill(sseURL, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // Handle incoming messages from SSE
        eventSource.onmessage = (event) => {
            const newNotification = JSON.parse(event.data);
            setNotifications(prevNotifications => [...prevNotifications, newNotification]);
            setLastEventId(event.lastEventId);
        };

        // Handle SSE errors
        eventSource.onerror = (err) => {
            console.error("EventSource failed:", err);
            eventSource.close();
        };

        // Cleanup SSE connection on component unmount
        return () => {
            eventSource.close();
        };
    }, [token]); // token이 변경될 때마다 SSE를 다시 구독

    const fetchPheeds = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/pheed/list", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // API 응답 데이터 구조를 확인하고, 필요한 데이터를 setPheeds에 설정
            const pheedList = response.data.results.pheeds || [];
            setPheeds(pheedList.reverse()); // 최신 순으로 역순 정렬하여 설정
        } catch (error) {
            console.error("Error fetching pheeds:", error);
        }
    };

    return (
        <div>
            <h1>Pheed List</h1>
            <ul>
                {pheeds.map(pheed => (
                    <li key={pheed.pheedCode}>
                        <strong>피드 코드:</strong> {pheed.pheedCode}<br/>
                        <strong>내용:</strong> {pheed.pheedCon}<br/>
                        <strong>생성 상태:</strong> {pheed.creStatus}<br/>
                        <strong>읽은 상태:</strong> {pheed.readStatus}<br/>
                        <strong>삭제 상태:</strong> {pheed.deStatus}<br/>
                        <strong>피드 종류:</strong> {pheed.pheedSort}<br/>
                        <hr/>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PheedComponent;
