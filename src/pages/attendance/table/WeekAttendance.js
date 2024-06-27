import React from 'react';

const WeekAttendance = ({ weekData, isOpen, toggle }) => {

    console.log(weekData)
    return (
        <div>
            <section className={`time_table bl_sect el_shadowD4 section2 ${isOpen ? 'go' : ''}`}>
                <ul className="bl_listRing" style={{ paddingTop: '30px', paddingRight: '10px' }}>
                    {weekData.map((dayData, index) => (
                        <li className="bl_tnaWeek" key={index}>
                            <div className="ly_spaceBetween ly_fitemC">
                                <div className="hp_fw700 hp_fs18 bl_tnaWeek__ttl letter03">{dayData.atdDate}</div>
                                <ul className="ly_spaceBetween ly_fgrow1 bl_tnaWeek__list">
                                    <li className=""><b className="hp_fw700">출근</b> &nbsp;{dayData.startTime != null ? dayData.startTime : "00:00:00"}</li>
                                    <li className=""><b className="hp_fw700">퇴근</b> &nbsp;{dayData.endTime != null ? dayData.endTime : "00:00:00"}</li>
                                    <li className=""><b className="hp_fw700">초과</b> &nbsp;00:00:00</li>
                                    <li className=""><b className="hp_fw700">총 근무시간</b>  &nbsp;{dayData.startTime && dayData.endTime? calculateWorkHours(dayData.startTime, dayData.endTime) : "00:00:00"}
                                    </li>
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

const calculateWorkHours = (startTime, endTime) => {
    // 출근 시간과 퇴근 시간이 "00:00:00" 형식일 경우를 처리하기 위해 추가적인 로직 필요
    if (startTime === "00:00:00" || endTime === "00:00:00") {
        return "기록이 없습니다.";
    }

    // 시작 시간과 종료 시간을 Date 객체로 변환
    const start = new Date(`1970-01-01T${startTime}`);
    const end = new Date(`1970-01-01T${endTime}`);

    // 시간 차이 계산 (밀리초 단위)
    const diffMs = end.getTime() - start.getTime();

    // 밀리초를 시간, 분, 초로 변환
    let totalSeconds = Math.floor(diffMs / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    // 시간, 분, 초를 '00:00:00' 형식으로 포맷팅
    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return formattedTime;
};


export default WeekAttendance;
