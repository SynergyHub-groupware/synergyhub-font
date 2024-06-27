import React from 'react';

const WeekAttendance = ({ weekData, isOpen, toggle }) => {
    return (
        <div>
            <section className={`time_table bl_sect el_shadowD4 section2 ${isOpen ? 'go' : ''}`}>
                <ul className="bl_listRing" style={{ paddingTop: '30px', paddingRight: '10px' }}>
                    {weekData.map((dayData, index) => (
                        <li className="bl_tnaWeek" key={index}>
                            <div className="ly_spaceBetween ly_fitemC">
                                <div className="hp_fw700 hp_fs18 bl_tnaWeek__ttl letter03">{dayData.atdDate}</div>
                                <ul className="ly_spaceBetween ly_fgrow1 bl_tnaWeek__list">
                                    <li className=""><b className="hp_fw700">출근</b> &nbsp;{dayData.StartTime != null ? dayData.StartTime : "기록이 없습니다."}</li>
                                    <li className=""><b className="hp_fw700">퇴근</b> &nbsp;{dayData.EndTime != null ? dayData.EndTime : "기록이 없습니다."}</li>
                                    <li className=""><b className="hp_fw700">초과</b> &nbsp;</li>
                                    <li className="hp_fw700"><b className="hp_fw700">총 근무시간</b> -</li>
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default WeekAttendance;
