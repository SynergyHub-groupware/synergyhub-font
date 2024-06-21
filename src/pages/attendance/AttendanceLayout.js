import React, { useEffect, useState } from 'react';
import AttendanceNav from "../../components/commons/AttendanceNav";
import * as PropTypes from "prop-types";
import TimeRegist from "./section/TimeRegist";

function TimeSection(props) {
    return null;
}

TimeSection.propTypes = {
    isCheckedIn: PropTypes.bool,
    empCode: PropTypes.any,
    handleCheckInOutSuccess: PropTypes.func
};

function AttendanceLayout() {
    const [empCode, setEmpCode] = useState(null);
    const [isCheckedIn, setIsCheckedIn] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('access-token');
                if (!token) {
                    throw new Error('접근 토큰이 없습니다.');
                }

                const response = await fetch('http://localhost:8080/employee/myInfo', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.ok) {
                    const data = await response.json();
                    setEmpCode(data.emp_code);
                    // 예시: 출근 상태를 확인하여 isCheckedIn 상태 업데이트
                    setIsCheckedIn(data.isCheckedIn); // 서버에서 출근 상태를 받아와서 설정
                } else {
                    throw new Error('사용자 정보를 가져오지 못했습니다.');
                }
            } catch (error) {
                console.error("사용자 조회에 실패했습니다.", error);
                // 오류 처리 로직 추가
            }
        };

        fetchUserData();
    }, []);

    const handleCheckInOutSuccess = () => {
        setIsCheckedIn(!isCheckedIn); // 출근 또는 퇴근 성공 시 상태 반전
    };
    return (
        <>
            <AttendanceNav/>
            <div className="ly_cont ly_flex">
                <div className=" hp_mr50">
                    <TimeRegist empCode={empCode} isCheckedIn={isCheckedIn} handleCheckInOutSuccess={handleCheckInOutSuccess} />
                    <section className="bl_sect hp_padding30 hp_w400px el_shadowD4 hp_mb30">
                        <div className="hp_fw700">근무 유형</div>
                        <div className="ly_spaceBetween ly_fitemC hp_mt5">
                            <div className="hp_fw700 hp_fs28">전략사업팀</div>
                            <ul className="hp_alignR">
                                <li className=""><b className="hp_fw700 hp_mr15">출근 가능 시간</b> 00:00:00</li>
                                <li className=""><b className="hp_fw700 hp_mr15">퇴근 가능 시간</b> 00:00:00</li>
                            </ul>
                        </div>
                        <button type="button" className="el_btn8Back el_btnF hp_mt20 hp_fs16">변경하기</button>
                    </section>
                    <section className="bl_sect hp_padding30 hp_w400px el_shadowD4 hp_mb30">
                        <div className="ly_spaceBetween">
                            <div className="hp_fw700">연차 사용 현황</div>
                            <div className="hp_fw700">2024년 5월 첫째주</div>
                        </div>
                        <div className="hp_fw700 hp_fs28 hp_mt5">1 / 15 <span className="hp_fs16">일</span></div>
                        <div className="hp_mt15">막대그래프 자리</div>
                        <ul className="hp_mt15">
                            <li className=""><b className="hp_fw700 hp_mr15">총 부여 연차</b> 15일</li>
                            <li className=""><b className="hp_fw700 hp_mr15">총 잔여 연차</b> 13일</li>
                        </ul>
                    </section>
                </div>
                <div className="ly_fgrow1">
                    <div className="ly_spaceBetween ly_fitemC hp_mb30">
                        <div className="ly_flex ly_fitemC">
                            <h4 className="el_lv1Head">주간 근태 현황</h4>
                            <div className="hp_ml15 ly_flex ly_fitemC">
                                <button type="button" className="bl_tnaPageBtn bl_tnaPageBtn__prev"></button>
                                <b className="hp_fw700 hp_fs20">5월</b>
                                <button type="button" className="bl_tnaPageBtn bl_tnaPageBtn__next"></button>
                            </div>
                        </div>
                        <button type="button" className="el_btn0Back el_btnS">엑셀 다운로드</button>
                    </div>
                    <section className="bl_sect hp_padding30 el_shadowD4 hp_mb30">
                        <div className="hp_fw700">2024년 5월 첫째주</div>
                        <div className="ly_spaceBetween hp_mt5">
                            <div className="">
                                <div className="hp_fw700 hp_fs28">18h 00m</div>
                                <div className="hp_mt15">막대그래프 자리</div>
                                <ul className="hp_mt15">
                                    <li className=""><b className="hp_fw700 hp_mr15">누적 정규 근무</b> 00:00:00</li>
                                    <li className=""><b className="hp_fw700 hp_mr15">누적 초과 근무</b> 00:00:00</li>
                                </ul>
                            </div>
                            <div className="ly_spaceBetween ly_fdirecCol ly_fitemEnd">
                                <div className="hp_fw700 hp_fs22 hp_alignR">홍길동 팀장님<br/>오늘도 좋은 하루 되세요!</div>
                                <button type="button" className="el_btn0Back el_btnF hp_w200px hp_mt20 hp_fs16">초과근무
                                    신청하기
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="bl_sect hp_padding30 el_shadowD4 hp_mb30">
                        <ul className="bl_listRing">
                            <li className="bl_tnaWeek">
                                <div className="ly_spaceBetween ly_fitemC">
                                    <div className="hp_fw700 hp_fs18 bl_tnaWeek__ttl">5월 1일 (월)</div>
                                    <ul className="ly_spaceBetween ly_fgrow1 bl_tnaWeek__list">
                                        <li className=""><b className="">출근</b> 09:00</li>
                                        <li className=""><b className="">퇴근</b> 09:00</li>
                                        <li className=""><b className="">초과</b> 09:00</li>
                                        <li className="hp_fw700"><b className="hp_fw700">총 근무시간</b> 09:00</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="bl_tnaWeek">
                                <div className="ly_spaceBetween ly_fitemC">
                                    <div className="hp_fw700 hp_fs18 bl_tnaWeek__ttl">5월 1일 (월)</div>
                                    <ul className="ly_spaceBetween ly_fgrow1 bl_tnaWeek__list">
                                        <li className=""><b className="">출근</b> 09:00</li>
                                        <li className=""><b className="">퇴근</b> 09:00</li>
                                        <li className=""><b className="">초과</b> 09:00</li>
                                        <li className="hp_fw700"><b className="hp_fw700">총 근무시간</b> 09:00</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="bl_tnaWeek">
                                <div className="ly_spaceBetween ly_fitemC">
                                    <div className="hp_fw700 hp_fs18 bl_tnaWeek__ttl">5월 1일 (월)</div>
                                    <ul className="ly_spaceBetween ly_fgrow1 bl_tnaWeek__list">
                                        <li className=""><b className="">출근</b> 09:00</li>
                                        <li className=""><b className="">퇴근</b> 09:00</li>
                                        <li className=""><b className="">초과</b> 09:00</li>
                                        <li className="hp_fw700"><b className="hp_fw700">총 근무시간</b> 09:00</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="bl_tnaWeek">
                                <div className="ly_spaceBetween ly_fitemC">
                                    <div className="hp_fw700 hp_fs18 bl_tnaWeek__ttl">5월 1일 (월)</div>
                                    <ul className="ly_spaceBetween ly_fgrow1 bl_tnaWeek__list">
                                        <li className=""><b className="">출근</b> 09:00</li>
                                        <li className=""><b className="">퇴근</b> 09:00</li>
                                        <li className=""><b className="">초과</b> 09:00</li>
                                        <li className="hp_fw700"><b className="hp_fw700">총 근무시간</b> 09:00</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="bl_tnaWeek">
                                <div className="ly_spaceBetween ly_fitemC">
                                    <div className="hp_fw700 hp_fs18 bl_tnaWeek__ttl">5월 1일 (월)</div>
                                    <ul className="ly_spaceBetween ly_fgrow1 bl_tnaWeek__list">
                                        <li className=""><b className="">출근</b> 09:00</li>
                                        <li className=""><b className="">퇴근</b> 09:00</li>
                                        <li className=""><b className="">초과</b> 09:00</li>
                                        <li className="hp_fw700"><b className="hp_fw700">총 근무시간</b> 09:00</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className="bl_sect hp_padding30 el_shadowD4 hp_mb30">
                        <ul className="ly_spaceAround">
                            <li className="bl_tnaWeek hp_mr15">
                                <div className="ly_spaceBetween ly_fitemC">
                                    <div className="bl_tna__label hp_mr20">이번 주</div>
                                    <ul className="ly_spaceBetween ly_fgrow1 bl_tnaWeek__list">
                                        <li className="hp_mr15"><b className="hp_fw700">누적</b> 16h 00m</li>
                                        <li className=""><b className="hp_fw700">초과</b> 16h 00m</li>
                                    </ul>
                                </div>
                            </li>
                            <li className="bl_tnaWeek hp_ml15">
                                <div className="ly_spaceBetween ly_fitemC">
                                    <div className="bl_tna__label hp_mr20">이번 달</div>
                                    <ul className="ly_spaceBetween ly_fgrow1 bl_tnaWeek__list">
                                        <li className="hp_mr15"><b className="hp_fw700">누적</b> 16h 00m</li>
                                        <li className=""><b className="hp_fw700">초과</b> 16h 00m</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className="bl_sect hp_padding30 el_shadowD4 hp_mb30">
                        <div className="hp_fw700">2024년 5월 2일</div>
                        <div className="ly_spaceBetween hp_mt20">
                            <ul className="ly_spaceBetween ly_fitemC">
                                <li className="hp_alignC hp_mr15">
                                    <div className="bl_tna__label hp_lh2-5">발생연차</div>
                                    <div className="hp_fw700 hp_fs28">14</div>
                                </li>
                                <li className="hp_alignC hp_mr15">
                                    <div className="bl_tna__label hp_lh2-5">사용연차</div>
                                    <div className="hp_fw700 hp_fs28">1</div>
                                </li>
                                <li className="hp_alignC hp_mr15">
                                    <div className="bl_tna__label hp_lh2-5">잔여연차</div>
                                    <div className="hp_fw700 hp_fs28">14</div>
                                </li>
                                <li className="hp_alignC hp_mr15">
                                    <div className="bl_tna__label bl_tna__label2 hp_lh2-5">승인대기</div>
                                    <div className="hp_fw700 hp_fs28">1</div>
                                </li>
                            </ul>
                            <div className="ly_spaceBetween ly_fdirecCol ly_fitemEnd">
                                <button type="button" className="el_btn0Bord el_btnF hp_w200px hp_fs16">팀원 휴가근황</button>
                                <button type="button" className="el_btn0Back el_btnF hp_w200px hp_mt10 hp_fs16">휴가
                                    신청하기
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export default AttendanceLayout;
