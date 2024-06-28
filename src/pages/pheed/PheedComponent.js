import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EventSourcePolyfill } from 'event-source-polyfill';

const PheedComponent = () => {
    const [pheeds, setPheeds] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [lastEventId, setLastEventId] = useState("");
    const [token, setToken] = useState(localStorage.getItem('access-token'));
    const [sseEventSource, setSseEventSource] = useState(null);
    const [refreshDisabled, setRefreshDisabled] = useState(true); // 초기에는 비활성화 상태
    const [showNewFeedNotification, setShowNewFeedNotification] = useState(false); // 새로운 피드 도착 알림 상태

    const sseURL = "http://localhost:8080/api/pheed/subscribe";

    useEffect(() => {
        // Fetch initial pheeds from REST API
        fetchPheeds();

        // Setup SSE connection
        const eventSource = new EventSourcePolyfill(sseURL, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        });

        // Handle incoming messages from SSE
        eventSource.onmessage = (event) => {
            const newNotification = JSON.parse(event.data);
            setNotifications(prevNotifications => [...prevNotifications, newNotification]);
            setLastEventId(event.lastEventId);

            // 새로운 피드가 도착했을 때 새로고침 버튼 활성화 및 알림 표시
            setRefreshDisabled(false);
            setShowNewFeedNotification(true);

            // 일정 시간 후에 알림을 숨김
            setTimeout(() => {
                setShowNewFeedNotification(false);
            }, 5000); // 5초 후에 숨김
        };

        // Handle SSE errors
        eventSource.onerror = (err) => {
            console.error("EventSource failed:", err);
            eventSource.close();
        };

        setSseEventSource(eventSource);

        // Cleanup SSE connection on component unmount
        return () => {
            eventSource.close();
        };
    }, [token]);

    const fetchPheeds = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/pheed/list", {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            const pheedList = response.data.results.pheeds || [];
            setPheeds(pheedList.reverse()); // 최신 순으로 역순 정렬하여 설정

            // 새로운 피드가 없으면 새로고침 버튼 비활성화
            setRefreshDisabled(pheedList.length === 0);
        } catch (error) {
            console.error("Error fetching pheeds:", error);
        }
    };

    const handleRefresh = () => {
        setRefreshDisabled(true); // 버튼 클릭 시 새로고침 비활성화
        fetchPheeds(); // 새로고침 버튼 클릭 시 fetchPheeds 함수 호출
    };

    return (
        <div>
            <h1>Pheed List</h1>
            {showNewFeedNotification && (
                <div style={{padding: '10px', backgroundColor: 'lightblue', marginBottom: '10px'}}>
                    새로운 피드가 도착했습니다!
                </div>
            )}
            <button
                onClick={handleRefresh}
                style={{
                    backgroundColor: refreshDisabled ? 'lightgray' : 'blue',
                    color: 'white',
                    padding: '10px',
                    width: '200px',
                    border: 'none',
                    cursor: refreshDisabled ? 'not-allowed' : 'pointer',
                    outline: 'none'
                }}
                disabled={refreshDisabled}
            >
                피드 새로고침
            </button>
            <div>
                {pheeds.map(pheed => (
                    <div key={pheed.pheedCode} style={{
                        marginBottom: "10px",
                        border: "1px solid lightgray",
                        padding: "10px",
                        borderRadius: "5px"
                    }}>
                        <strong>피드 코드:</strong> {pheed.pheedCode}<br/>
                        <strong>내용:</strong> {pheed.pheedCon}<br/>
                        <strong>생성 상태:</strong> {pheed.creStatus}<br/>
                        <strong>읽은 상태:</strong> {pheed.readStatus}<br/>
                        <strong>삭제 상태:</strong> {pheed.deStatus}<br/>
                        <strong>피드 종류:</strong> {pheed.pheedSort}<br/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PheedComponent;
